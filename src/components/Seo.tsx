import { Helmet } from "react-helmet-async";

const SITE = "https://aurexagency.lovable.app";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export const Seo = ({ title, description, path, image }: SeoProps) => {
  const url = `${SITE}${path}`;
  const ogImage = image ? (image.startsWith("http") ? image : `${SITE}${image}`) : undefined;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};
