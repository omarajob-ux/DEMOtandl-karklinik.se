import { Helmet } from "react-helmet-async";
import { clinic, seoDefaults } from "../config/site";

export default function SEO({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} | ${clinic.name}` : seoDefaults.titleSuffix;
  const desc = description || seoDefaults.description;
  const url = `${seoDefaults.siteUrl}${path}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    image: `${seoDefaults.siteUrl}/og-image.jpg`,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1,
      addressLocality: clinic.city,
      postalCode: clinic.address.line2.split(" ").slice(0, 2).join(" "),
      addressCountry: "SE",
    },
    url: seoDefaults.siteUrl,
    openingHoursSpecification: clinic.openingHours
      .filter((o) => o.hours !== "Stängt")
      .map((o) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: o.day,
        opens: o.hours.split("–")[0],
        closes: o.hours.split("–")[1],
      })),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={seoDefaults.keywords} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content={clinic.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
