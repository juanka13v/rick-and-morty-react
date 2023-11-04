import { Helmet } from "react-helmet";

const MetaTags = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title || "Rick and Morty"}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default MetaTags;
