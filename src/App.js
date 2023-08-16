/** @format */

import "./App.scss";
import Header from "./components/header/Header";
import PageTitle from "./components/pageTitle/PageTitle";
import ProductsFilter from "./components/productsFilter/ProductsFilter";
import SearchFilter from "./components/searchFilter/SearchFilter";
import Sidebar from "./components/sidebar/Sidebar";
import Products from "./pages/products/Products";
import data from "./data.json";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";

import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  const [products, setProducts] = useState(data.products);
  const [filterdProducts, setFilterdProducts] = useState(data.products);

  const [feature, setFeature] = useState("Featured");

  const [activeSideBar, setActiveSideBar] = useState("");

  const [activeProductFilter, setActiveProductFilter] = useState("");

  const [theme, setTheme] = useState("light");

  const [showTopBtn, setShowTopBtn] = useState(false);

  function handleByPrice(e) {
    let sort = e.target.innerText;
    setFeature(sort);
    setFilterdProducts(
      filterdProducts.sort((a, b) =>
        sort === "Lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "Highest"
          ? a.price < b.price
            ? 1
            : -1
          : a.id < b.id
          ? 1
          : -1
      )
    );
  }

  function showSidebar() {
    setActiveSideBar(activeSideBar == "active" ? "" : "active");
  }

  function showProductFilter() {
    setActiveProductFilter(activeProductFilter == "active" ? "" : "active");
  }

  useEffect(() => {
    goToTop();
  }, [filterdProducts]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={`App ${theme}-theme`}>
      <Sidebar activeSideBar={activeSideBar} theme={theme} />
      <div
        className={`overlay-for-sidebar ${activeSideBar}`}
        onClick={() => showSidebar()}
      ></div>
      <div className="content">
        <Header showSidebar={showSidebar} theme={theme} setTheme={setTheme} />
        <div className="page-content">
          <PageTitle theme={theme} />
          <div className="products-and-filters">
            <div
              className={`overlay-filter ${activeProductFilter}`}
              onClick={() => showProductFilter()}
            ></div>
            <ProductsFilter
              products={products}
              filterdProducts={filterdProducts}
              setFilterdProducts={setFilterdProducts}
              activeProductFilter={activeProductFilter}
              showProductFilter={showProductFilter}
              theme={theme}
            />
            <div className="products-and-search">
              <SearchFilter
                products={products}
                filterdProducts={filterdProducts}
                setFilterdProducts={setFilterdProducts}
                feature={feature}
                handleByPrice={handleByPrice}
                showProductFilter={showProductFilter}
                theme={theme}
              />
              <Products filterdProducts={filterdProducts} theme={theme} />
            </div>
          </div>
        </div>

        <Footer theme={theme} />
        <div className={`go-to-up ${showTopBtn ? "show" : ""}`}>
          <button onClick={() => goToTop()}>
            <AiOutlineArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
