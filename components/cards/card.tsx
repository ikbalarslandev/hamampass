const Card = ({ property }: any) => (
  <div className="bg-gray-400  mb-2">
    <h2>title: {property.title}</h2>
    <p>vibe: {property.vibe}</p>
    <p>
      {property.amenities.map((amenity: any, index: number) => (
        <span key={index}>{amenity}, </span>
      ))}
    </p>

    <div className="bg-red-200">
      <p>adult price: {property.price.adult}</p>
      <p>child price: {property.price.child}</p>
      <p>scrub price: {property.price.scrub}</p>
    </div>

    <div className="bg-green-200">
      <p>city: {property.contact.city}</p>
      <p>district: {property.contact.district}</p>
      <p>address: {property.contact.address}</p>
      <p>location: {property.contact.location}</p>
      <p>phone: {property.contact.phone}</p>
    </div>
    <div className="bg-blue-200">
      <p>monday: {}</p>
    </div>
  </div>
);

export default Card;
