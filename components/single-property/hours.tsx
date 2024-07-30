"use client";

import { useTranslations } from "next-intl";
import { TDay } from "@/types";
import { useState, useEffect } from "react";

interface HoursComponentProps {
  data: TDay[];
}

interface Hour {
  day: string;
  open: string;
  close: string;
  sex: number;
}

const HoursComponent: React.FC<HoursComponentProps> = ({ data }) => {
  const t = useTranslations("single");
  const h = useTranslations("hours");
  const s = useTranslations("sex-number");

  const [hours, setHours] = useState<Hour[]>([]);

  useEffect(() => {
    setHours(
      data.map((day) => {
        return {
          day: h(day.day),
          open: day.openTime,
          close: day.closeTime,
          sex: day.sex,
        };
      })
    );
  }, [data]);

  return (
    <div className="my-2 mt-6">
      <h2 className="font-bold text-xl text-gray-600">{t("hours")}</h2>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {h("day")}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {h("open")}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {h("close")}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {hours.map((hour, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex flex-col">
                <p>{hour.day}</p>
                <div>
                  <span className="bg-teal-600 text-white rounded px-1 inline-block">
                    {s(hour.sex.toString())}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hour.open}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {hour.close}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoursComponent;
