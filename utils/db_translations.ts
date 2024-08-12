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

export { convertAgeRange };
