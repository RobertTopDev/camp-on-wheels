import { Helmet, HelmetProvider } from "react-helmet-async";

export default function FontsHelmet() {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
    </HelmetProvider>
  );
}
