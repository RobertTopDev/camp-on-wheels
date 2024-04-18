import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollBtn from "../../components/ScrollBtn/ScrollBtn";

// eslint-disable-next-line react/prop-types
export default function RootLayout({ toggleTheme, isDarkTheme }) {
  return (
    <div style={{ position: "relative" }}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <ScrollBtn />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
