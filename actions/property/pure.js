const filterByKeys = (filters) => (properties) =>
  properties.filter((property) =>
    Object.keys(filters).every((filter) => {
      if (filter.includes("_")) {
        const [key, subKey] = filter.split("_");
        return property[key][subKey] === filters[filter];
      }
      return property[filter] == filters[filter];
    })
  );

const filterByAmenity = (amenity) => (properties) =>
  amenity
    ? properties.filter((property) =>
        JSON.parse(amenity).every((a) => property.amenities.includes(a))
      )
    : properties;

const filterBySex = (sex) => (properties) =>
  sex
    ? properties.filter((property) => JSON.parse(sex).includes(property.sex))
    : properties;

const sortProperties = (sort) => (properties) => {
  if (sort === "cheap") {
    return properties.sort((a, b) => a.price.adult - b.price.adult);
  }
  if (sort === "expensive") {
    return properties.sort((a, b) => b.price.adult - a.price.adult);
  }
  return properties;
};

const filterByRange = (range) => (properties) =>
  range
    ? properties.filter((property) => {
        const [min, max] = JSON.parse(range);

        const lowestTypeProduct = property.products.reduce(
          (prev, current) => (prev.type < current.type ? prev : current),
          property.products[0]
        );

        return (
          lowestTypeProduct.adult_price >= min &&
          lowestTypeProduct.adult_price <= max
        );
      })
    : properties;

const paginate = (page, limit) => (properties) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return properties.slice(startIndex, endIndex);
};

export {
  filterByKeys,
  filterByAmenity,
  filterBySex,
  sortProperties,
  filterByRange,
  paginate,
};
