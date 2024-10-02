const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.hamampass.com/#website",
      name: "Hamampass",
      url: "https://www.hamampass.com",
      description: "Hamampass is a platform for Turkish bath lovers.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.hamampass.com/en/properties?district={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@id": "https://www.hamampass.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.hamampass.com/#organization",
      name: "Hamampass",
      url: "https://www.hamampass.com",
      logo: "https://www.hamampass.com/logo.png",
      sameAs: ["https://www.linkedin.com/company/hamampass"],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.hamampass.com/#webpage",
      name: "Aziziye Hamamı",
      url: "https://www.hamampass.com/en/properties/Aziziye-Hamam%C4%B1",
      description:
        "Explore the best Turkish bath experiences through Hamampass.",
      isPartOf: {
        "@id": "https://www.hamampass.com/#website",
      },
    },
  ],
};

export { jsonLd };
