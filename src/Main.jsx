import { useState } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export const Main = () => {
  const [triangles, setTriangles] = useState([true, false, false, false]);

  const displayTriangle = (tr) => {
    setTriangles(tr);
  };

  return (
    <main className="main--container">
      <div className="wrapper">
        <Header />
        <section className="section">
          <Outlet />
        </section>
        <Footer />
      </div>
    </main>
  );
};
