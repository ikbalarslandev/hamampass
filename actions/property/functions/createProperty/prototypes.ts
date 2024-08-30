export type TProductType = 0 | 1;

export const productPrototypes: Record<
  TProductType,
  {
    desc_tr: string;
    desc_en: string;
    detail_tr: string[];
    detail_en: string[];
  }
> = {
  0: {
    desc_tr:
      "Basit paket sadece hamama girişi kapsar kese masaj gibi ekstra hizmetler dahil değildir",
    desc_en:
      "The Basic package only includes entrance to the hamam; extra services such as body scrub and massage are not included.",
    detail_tr: [
      "Tüm ıslak alan kullanılabilinir.",
      "extra hizmetler dahil değil",
    ],
    detail_en: ["Access to all facilities", "Extra addons are not included"],
  },
  1: {
    desc_tr: "Standart paket hamama giriş, kese ve köpük masajını kapsar",
    desc_en: "Regular package includes entrance, body scrub, and foam massage.",
    detail_tr: [
      "Tüm ıslak alan kullanılabilinir.",
      "10 dakikalık kese ve köpük masajı pakete dahildir",
    ],
    detail_en: [
      "Access to all facilities",
      "10 minutes of body scrubbing and foam massage.",
    ],
  },
};
