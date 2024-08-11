"use client";

import { Bar, BarChart, Cell } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import RangeSlider from "@/components/ui/slider";
import React, { useState } from "react";
import MinMax from "./min-max";

const chartData = [
  { price: 200, property: 2 },
  { price: 250, property: 2 },
  { price: 300, property: 2 },
  { price: 350, property: 20 },
  { price: 400, property: 2 },
  { price: 450, property: 2 },
  { price: 500, property: 2 },
  { price: 550, property: 20 },
  { price: 600, property: 2 },
  { price: 650, property: 2 },
  { price: 700, property: 20 },
  { price: 750, property: 2 },
  { price: 800, property: 0 },
  { price: 850, property: 20 },
  { price: 900, property: 2 },
  { price: 950, property: 2 },
  { price: 1000, property: 2 },
  { price: 1050, property: 20 },
  { price: 1100, property: 2 },
  { price: 1150, property: 2 },
  { price: 1200, property: 2 },
  { price: 1250, property: 2 },
  { price: 1300, property: 2 },
  { price: 1350, property: 2 },
  { price: 1400, property: 2 },
  { price: 1450, property: 2 },
  { price: 1500, property: 2 },
  { price: 1550, property: 2 },
  { price: 1600, property: 2 },
  { price: 1650, property: 2 },
  { price: 1700, property: 20 },
  { price: 1750, property: 2 },
  { price: 1800, property: 2 },
  { price: 1850, property: 2 },
  { price: 1900, property: 2 },
  { price: 1950, property: 2 },
  { price: 2000, property: 2 },
  { price: 2050, property: 2 },
  { price: 2100, property: 20 },
  { price: 2150, property: 2 },
  { price: 2200, property: 2 },
];

const chartConfig = {
  property: {
    label: "property",
    color: "#06B6D4",
  },
} satisfies ChartConfig;

const Chart = () => {
  const [range, setRange] = useState<number[]>([200, 2200]);
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
          min={200}
          max={2200}
          onRangeChange={(newRange: number[]) => setRange(newRange)}
        />
      </div>

      <MinMax range={range} />
    </div>
  );
};

export default Chart;
