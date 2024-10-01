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

export { convertAdminProductTypeInfo };
