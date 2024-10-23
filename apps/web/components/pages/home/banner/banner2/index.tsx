import ExploreBanner from "./explore";
import OnlyBanner from "./only";
import BookBanner from "./book";

interface Banner2Props {
  children?: React.ReactNode;
}

const Banner2 = ({ children }: Banner2Props) => {
  return (
    <div>
      <OnlyBanner />
      <ExploreBanner />
      {children}
      <BookBanner />
    </div>
  );
};

export default Banner2;
