import { Helmet } from "react-helmet-async";

const SITE = "https://www.aurexagency.com";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: object | object[];
}

export const Seo = ({ title, description, path, image, jsonLd }: SeoProps) => {
  const url = `${SITE}${path}`;
  const ogImage = image ? (image.startsWith("http") ? image : `${SITE}${image}`) : undefined;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="geo.region" content="US-MS" />
      <meta name="geo.placename" content="Oxford, North Mississippi" />
      <meta name="geo.position" content="34.3665;-89.5192" />
      <meta name="ICBM" content="34.3665, -89.5192" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Aurex" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};
