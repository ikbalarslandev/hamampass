import CheckboxComponent from "./checkbox";

const VibeComponent = () => {
  return (
    <div>
      <h2>Vibes</h2>
      <CheckboxComponent id={0} name="Historical" paramName="vibe" />
      <CheckboxComponent id={2} name="Budget" paramName="vibe" />
      <CheckboxComponent id={3} name="Couple Friendly" paramName="vibe" />
      <CheckboxComponent id={4} name="Family Friendly" paramName="vibe" />
      <CheckboxComponent id={5} name="Luxury" paramName="vibe" />
    </div>
  );
};

export default VibeComponent;
