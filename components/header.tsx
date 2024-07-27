import LocaleSwitcher from "./locale-switcher";

const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-center gap-5 bg-cyan-600 text-white">
      <h1 className="text-3xl py-3">Hamam Pass</h1>
      <LocaleSwitcher />
    </header>
  );
};

export default HeaderComponent;
