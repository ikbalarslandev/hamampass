"use client";

import { Bar, BarChart, Cell } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import RangeSlider from "@/components/ui/slider";
import React, { useEffect, useState } from "react";
import MinMax from "./min-max";
import { request } from "@/services/axios";
import { TApiResponse } from "@/types";
import { useSearchParams } from "next/navigation";

const chartConfig = {
  property: {
    label: "property",
    color: "#06B6D4",
  },
} satisfies ChartConfig;

const Chart = () => {
  const searchParams = useSearchParams();
  const urlRange = JSON.parse(searchParams.get("range") || "[]");

  const [range, setRange] = useState<number[]>(
    urlRange.length ? urlRange : [200, 2200]
  );
  const [chartData, setChartData] = useState(
    Array.from({ length: 41 }, (_, index) => ({
      price: 200 + index * 50,
      property: 0,
    }))
  );
  const [properties, setProperties] = useState<TApiResponse>(
    {} as TApiResponse
  );

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await request({
          type: "get",
          endpoint: "property",
          params: {
            sort: searchParams.get("sort"),
            contact_district: searchParams.get("district"),
            vibe: searchParams.get("vibe"),
            amenity: searchParams.get("amenity"),
            sex: searchParams.get("sex"),
            pay: searchParams.get("pay"),
          },
        });

        setProperties(Array.isArray(response.data.data) ? response.data : {});
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [searchParams]);

  useEffect(() => {
    if (properties.data) {
      const newChartData = chartData.map((entry) => {
        const propertyCount = properties.data.filter(
          (property) =>
            property.price.adult <= entry.price &&
            property.price.adult > entry.price - 50
        ).length;
        return { ...entry, property: propertyCount };
      });

      setChartData(newChartData);
    }
  }, [properties]);

  useEffect(() => {
    if (JSON.stringify(range) === JSON.stringify([200, 2200])) return;

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("range", JSON.stringify(range));
    window.history.replaceState(null, "", `?${urlParams.toString()}`);
  }, [range]);

  const getColor = (price: number) => {
    return price >= range[0] && price <= range[1]
      ? chartConfig.property.color
      : "#6B7280";
  };

  return (
    <div>
      <ChartContainer config={chartConfig} className="min-w-[50vw]">
        <BarChart data={chartData}>
          <Bar dataKey="property" barSize={10}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.price)} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
      <div>
        <RangeSlider
          min={urlRange[0] ?? 200}
          max={urlRange[1] ?? 2200}
          onRangeChange={(newRange: number[]) => setRange(newRange)}
        />
      </div>

      <MinMax range={range} />
    </div>
  );
};

export default Chart;
