import JsxParser from "react-jsx-parser";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslations } from "@hamampass/i18n";
import DrawerGeneral from "@/components/commons/drawer";

const AboutComponent = ({ desc }: any) => {
  const description = <JsxParser components={{}} jsx={desc} />;

  const t = useTranslations("single");
  const title = useTranslations("titles");

  if (!desc) return null;

  return (
    <section>
      <h2 className="font-bold text-xl text-gray-600 mt-5 mb-3">
        {title("about_title")}
      </h2>

      <div className="max-h-40 overflow-hidden">{description}</div>

      <DrawerGeneral
        trigger={
          <p className="flex items-center justify-end underline">
            <span>{t("read-more")}</span>
            <MdKeyboardArrowRight size={20} />
          </p>
        }
        title={title("about_title")}
        content={description}
      />
    </section>
  );
};

export default AboutComponent;
