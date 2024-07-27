import LocaleSwitcher from "./locale-switcher";

const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-center gap-5 bg-cyan-600 text-white px-2">
      <h1 className="text-3xl py-3 flex-1 text-center">Hamam Pass</h1>
      <LocaleSwitcher />
    </header>
  );
};

export default HeaderComponent;
