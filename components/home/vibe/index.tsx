import CheckboxComponent from "./checkbox";

const VibeComponent = () => {
  return (
    <div>
      <h2>Vibes</h2>
      <CheckboxComponent id={0} name="Chill" />
      <CheckboxComponent id={2} name="Party" />
      <CheckboxComponent id={3} name="Family" />
      <CheckboxComponent id={4} name="Romantic" />
    </div>
  );
};

export default VibeComponent;
