import CheckboxComponent from "../vibe/checkbox";

// enum EAmenities {
//   Turkish_Bath === 0
//   Shower   === 1
//   Sauna    === 2
//   Steam_Room  === 3
//   Jacuzzi     === 4
//   Pool       === 5
//   Shock_Pool   === 6
//   Spa      === 7
// }

const AmenityComponent = () => {
  return (
    <div>
      <h2>Amenities</h2>
      <CheckboxComponent id={0} name="Turkish Bath" paramName="amenity" />
      <CheckboxComponent id={1} name="Shower" paramName="amenity" />
      <CheckboxComponent id={2} name="Sauna" paramName="amenity" />
      <CheckboxComponent id={3} name="Steam Room" paramName="amenity" />
      <CheckboxComponent id={4} name="Jacuzzi" paramName="amenity" />
      <CheckboxComponent id={5} name="Pool" paramName="amenity" />
      <CheckboxComponent id={6} name="Shock Pool" paramName="amenity" />
      <CheckboxComponent id={7} name="Spa" paramName="amenity" />
    </div>
  );
};

export default AmenityComponent;
