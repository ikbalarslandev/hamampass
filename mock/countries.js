const countries = [
  {
    tld: "af",
    name_tr: "Afganistan",
    name_en: "Afghanistan",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/afghanistan-flag.webp",
  },
  {
    tld: "al",
    name_tr: "Arnavutluk",
    name_en: "Albania",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/albania-flag.webp",
  },
  {
    tld: "dz",
    name_tr: "Cezayir",
    name_en: "Algeria",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/algeria-flag.webp",
  },
  {
    tld: "ar",
    name_tr: "Arjantin",
    name_en: "Argentina",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/argentina-flag.webp",
  },
  {
    tld: "am",
    name_tr: "Ermenistan",
    name_en: "Armenia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/armenia-flag.webp",
  },
  {
    tld: "au",
    name_tr: "Avustralya",
    name_en: "Australia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/australia-flag.webp",
  },
  {
    tld: "at",
    name_tr: "Avusturya",
    name_en: "Austria",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/austria-flag.webp",
  },
  {
    tld: "az",
    name_tr: "Azerbaycan",
    name_en: "Azerbaijan",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/azerbaijan-flag.webp",
  },
  {
    tld: "be",
    name_tr: "Belçika",
    name_en: "Belgium",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/belgium-flag.webp",
  },
  {
    tld: "br",
    name_tr: "Brezilya",
    name_en: "Brazil",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/brazil-flag.webp",
  },
  {
    tld: "bg",
    name_tr: "Bulgaristan",
    name_en: "Bulgaria",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/bulgaria-flag.webp",
  },
  {
    tld: "ca",
    name_tr: "Kanada",
    name_en: "Canada",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/canada-flag.webp",
  },
  {
    tld: "cl",
    name_tr: "Şili",
    name_en: "Chile",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/chile-flag.webp",
  },
  {
    tld: "cn",
    name_tr: "Çin",
    name_en: "China",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/china-flag.webp",
  },
  {
    tld: "co",
    name_tr: "Kolombiya",
    name_en: "Colombia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/colombia-flag.webp",
  },
  {
    tld: "tr",
    name_tr: "Türkiye",
    name_en: "Turkey",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/turkey-flag.webp",
  },
  {
    tld: "us",
    name_tr: "Amerika",
    name_en: "USA",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/united-states-flag.webp",
  },
  {
    tld: "cr",
    name_tr: "Kosta Rika",
    name_en: "Costa Rica",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/costa-rica-flag.webp",
  },
  {
    tld: "hr",
    name_tr: "Hırvatistan",
    name_en: "Crotia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/croatia-flag.webp",
  },
  {
    tld: "cu",
    name_tr: "Küba",
    name_en: "Cuba",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/cuba-flag.webp",
  },
  {
    tld: "cz",
    name_tr: "Çekya",
    name_en: "Czechia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/czechia-flag.webp",
  },
  {
    tld: "dk",
    name_tr: "Danimarka",
    name_en: "Denmark",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/denmark-flag.webp",
  },
  {
    tld: "do",
    name_tr: "Dominik Cumhuriyeti",
    name_en: "Dominican Republic",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/dominican-republic-flag.webp",
  },
  {
    tld: "ec",
    name_tr: "Ekvador",
    name_en: "Ecuador",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/ecuador-flag.webp",
  },
  {
    tld: "eg",
    name_tr: "Mısır",
    name_en: "Egypt",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/egypt-flag.webp",
  },
  {
    tld: "uk",
    name_tr: "Birleşik Krallık",
    name_en: "UK",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/united-kingdom-flag.webp",
  },
  {
    tld: "fi",
    name_tr: "Finlandiya",
    name_en: "Finland",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/finland-flag.webp",
  },
  {
    tld: "fr",
    name_tr: "Fransa",
    name_en: "France",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/france-flag.webp",
  },
  {
    tld: "de",
    name_tr: "Almanya",
    name_en: "Germany",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/germany-flag.webp",
  },
  {
    tld: "gr",
    name_tr: "Yunanistan",
    name_en: "Greece",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/greece-flag.webp",
  },
  {
    tld: "hu",
    name_tr: "Macaristan",
    name_en: "Hungary",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/hungary-flag.webp",
  },
  {
    tld: "in",
    name_tr: "Hindistan",
    name_en: "India",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/india-flag.webp",
  },
  {
    tld: "id",
    name_tr: "Endonezya",
    name_en: "Indonesia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/indonesia-flag.webp",
  },
  {
    tld: "ir",
    name_tr: "İran",
    name_en: "Iran",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/iran-flag.webp",
  },
  {
    tld: "iq",
    name_tr: "Irak",
    name_en: "Iraq",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/iraq-flag.webp",
  },
  {
    tld: "ie",
    name_tr: "İrlanda",
    name_en: "Ireland",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/ireland-flag.webp",
  },
  {
    tld: "it",
    name_tr: "İtalya",
    name_en: "Italy",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/italy-flag.webp",
  },
  {
    tld: "jp",
    name_tr: "Japonya",
    name_en: "Japan",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/japan-flag.webp",
  },
  {
    tld: "jo",
    name_tr: "Ürdün",
    name_en: "Jordan",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/jordan-flag.webp",
  },
  {
    tld: "kz",
    name_tr: "Kazakistan",
    name_en: "Kazakhstan",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/kazakhstan-flag.webp",
  },
  {
    tld: "kr",
    name_tr: "Güney Kore",
    name_en: "South Korea",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/south-korea-flag.webp",
  },
  {
    tld: "lb",
    name_tr: "Libya",
    name_en: "Lebanon",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/lebanon-flag.webp",
  },
  {
    tld: "mx",
    name_tr: "Meksika",
    name_en: "Mexico",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/mexico-flag.webp",
  },
  {
    tld: "nl",
    name_tr: "Hollanda",
    name_en: "Netherlands",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/netherlands-flag.webp",
  },
  {
    tld: "nz",
    name_tr: "Yeni Zelanda",
    name_en: "New Zealand",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/new-zealand-flag.webp",
  },
  {
    tld: "no",
    name_tr: "Norveç",
    name_en: "Norway",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/norway-flag.webp",
  },
  {
    tld: "pk",
    name_tr: "Pakistan",
    name_en: "Pakistan",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/pakistan-flag.webpp",
  },
  {
    tld: "pe",
    name_tr: "Peru",
    name_en: "Peru",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/peru-flag.webp",
  },
  {
    tld: "ph",
    name_tr: "Filipinler",
    name_en: "Philippines",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/philippines-flag.webp",
  },
  {
    tld: "pl",
    name_tr: "Polonya",
    name_en: "Poland",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/poland-flag.webp",
  },
  {
    tld: "pt",
    name_tr: "Portekiz",
    name_en: "Portugal",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/portugal-flag.webp",
  },
  {
    tld: "pr",
    name_tr: "Puerto Rico",
    name_en: "Puerto Rico",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/puerto-rico-flag.webp",
  },
  {
    tld: "ro",
    name_tr: "Romanya",
    name_en: "Romania",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/romania-flag.webp",
  },
  {
    tld: "ru",
    name_tr: "Rusya",
    name_en: "Russia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/russia-flag.webp",
  },
  {
    tld: "sa",
    name_tr: "Suudi Arabistan",
    name_en: "Saudi Arabia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/saudi-arabia-flag.webp",
  },
  {
    tld: "rs",
    name_tr: "Sırbistan",
    name_en: "Serbia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/serbia-flag.webp",
  },
  {
    tld: "sg",
    name_tr: "Singapur",
    name_en: "Singapore",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/singapore-flag.webp",
  },
  {
    tld: "za",
    name_tr: "Güney Afrika",
    name_en: "South Africa",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/south-africa-flag.webp",
  },
  {
    tld: "es",
    name_tr: "İspanya",
    name_en: "Spain",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/spain-flag.webp",
  },
  {
    tld: "se",
    name_tr: "İsveç",
    name_en: "Sweden",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/sweden-flag.webp",
  },
  {
    tld: "ch",
    name_tr: "İsviçre",
    name_en: "Switzerland",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2022/12/switzerland-flag.webp",
  },
  {
    tld: "tw",
    name_tr: "Tayvan",
    name_en: "Taiwan",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/taiwan-flag.webp",
  },
  {
    tld: "th",
    name_tr: "Tayland",
    name_en: "Thailand",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/thailand-flag.webp",
  },
  {
    tld: "tn",
    name_tr: "Tunus",
    name_en: "Tunisia",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/tunisia-flag.webp",
  },
  {
    tld: "tm",
    name_tr: "Türkmenistan",
    name_en: "Turkmenistan",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/turkmenistan-flag.webp",
  },
  {
    tld: "ua",
    name_tr: "Ukrayna",
    name_en: "Ukraine",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/ukraine-flag.webp",
  },
  {
    tld: "ae",
    name_tr: "Birleşik Arap Emirlikleri",
    name_en: "UAE",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/united-arab-emirates-flag.webp",
  },
  {
    tld: "uz",
    name_tr: "Özbekistan",
    name_en: "Uzbekistan",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/uzbekistan-flag.webp",
  },
  {
    tld: "vn",
    name_tr: "Vietnam",
    name_en: "Vietnam",
    image:
      "https://flagsoftheworld.info/wp-content/uploads/2023/01/vietnam-flag.webp",
  },
];
