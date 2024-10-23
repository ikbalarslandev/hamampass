import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="bg-primary-10 text-white pt-10 pb-6 px-4">
      <Image
        src="/longLogo.png"
        width={200}
        height={200}
        alt="logo"
        className="z-40"
      />
      <p className="my-6">
        Discover the best Hamams <br /> in Istanbul
      </p>

      <ul className="font-bold text-lg flex flex-col gap-2">
        <li>About Us</li>
        <li>Contact</li>
        <li>FAQs</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
      <p className="mt-6">© 2024 Hamampass</p>
    </footer>
  );
};

export default FooterComponent;
