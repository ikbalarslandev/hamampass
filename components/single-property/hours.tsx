"use client";

import { useTranslations } from "next-intl";

const HoursComponent = () => {
  const t = useTranslations("single");
  const h = useTranslations("hours");

  const hours = [
    { day: h("monday"), open: "09:00", close: "17:00" },
    { day: h("tuesday"), open: "09:00", close: "17:00" },
    { day: h("wednesday"), open: "09:00", close: "17:00" },
    { day: h("thursday"), open: "09:00", close: "17:00" },
    { day: h("friday"), open: "09:00", close: "17:00" },
    { day: h("saturday"), open: "10:00", close: "15:00" },
    { day: h("sunday"), open: "Closed", close: "" },
  ];

  return (
    <div>
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {hour.day}
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
