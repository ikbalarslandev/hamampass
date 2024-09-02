const convertAgeRange = (n: number) => {
  switch (n) {
    case 0:
      return "0-17";
    case 1:
      return "18-24";
    case 2:
      return "25-30";
    case 3:
      return "31-40";
    case 4:
      return "41+";
    default:
      return "Invalid age range";
  }
};

const convertAdminProductTypeInfo = (type: number) => {
  switch (type) {
    case 0:
      return {
        title: "Basit Paket",
        description:
          "Sadece islak alan kullanımı, ekstra hizmetler dahil değil",
      };
    case 1:
      return {
        title: "Standart Paket",
        description: "Islak alan kullanımı, ek olarak kese köpük dahil",
      };
    default:
      return {
        title: "Unknown Paket",
        description: "No description available",
      };
  }
};

const checkIsWeekDay = (day: string) => {
  if (day == "0" || day == "6") {
    return false;
  }
  return true;
};

export { convertAgeRange, convertAdminProductTypeInfo, checkIsWeekDay };
