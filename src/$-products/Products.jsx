// IMPORTS DE MODULOS
import React, { useState } from "react";

// IMPORTS DE COMPONENTES
import AllDataProducts from "./AllDataProducts";
import {
  ButtonAllProducts,
  ButtonBakery,
  ButtonHotDrinks,
  ButtonsPagination,
} from "./Buttons";
import CardsProducts from "./CardsProducts";

const allCategories = [
  "All",
  ...new Set(AllDataProducts.map((item) => item.product)),
];

const Products = () => {
  // Filter
  const cardsPerPage = 12;
  const [cards, setCards] = useState(
    [...AllDataProducts].splice(0, cardsPerPage)
  );
  const [buttons, setButtons] = useState(allCategories);

  const filter = (category) => {
    if (category === "All") {
      setCards([...AllDataProducts].splice(0, cardsPerPage));
      return;
    }

    const filteredData = AllDataProducts.filter(
      (items) => items.product === category
    );
    setCards(filteredData);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const totalCards = [...AllDataProducts].length;

  // next button function
  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * cardsPerPage;
    if (firstIndex === totalCards) return;

    setCards([...AllDataProducts].splice(firstIndex, cardsPerPage));
    setCurrentPage(nextPage);
  };
  // prev button function
  const prevHandler = () => {
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * cardsPerPage;
    if (firstIndex < 0) return;

    setCards([...AllDataProducts].splice(firstIndex, cardsPerPage));
    setCurrentPage(prevPage);
  };

  return (
    <>
      <div className="container-xs bg-cream" style={{ padding: "0" }}>
        <section className="container-xs bg-cream pt-2 pb-5">
          <h3 className="py-4 text-center brown-font" id="Handler">
            Productos
          </h3>
          <div className="text-center">
            <div class="dropdown pt-2 pb-4 d-md-none">
              <button
                class="btn bg-brown white-font dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Todas las categorias
              </button>
              <ul
                class="dropdown-menu bg-cream brown-font text-center ms-2 fw-bold"
                aria-labelledby="dropdownMenu2"
              >
                <ButtonAllProducts
                  buttons={buttons}
                  filter={filter}
                  className="fw-bold bg-brown-hover"
                />
                <ButtonBakery buttons={buttons} filter={filter} />
                <ButtonHotDrinks buttons={buttons} filter={filter} />
              </ul>
            </div>
          </div>
          <div className="d-flex">
            <div
              className="d-none d-md-block ps-4 pe-5"
              style={{ width: "min-content" }}
            >
              <ButtonAllProducts buttons={buttons} filter={filter} />
              <hr className="m-0" />
              <div className="filters">
                <h5 className="brown-font mb-1" style={{ fontSize: "1.1rem" }}>
                  Pastelería
                </h5>
                <ul className="list-unstyled line-height-products mb-3">
                  <ButtonBakery buttons={buttons} filter={filter} />
                </ul>
              </div>
              <div>
                <h5
                  className="line-height-products mb-1"
                  style={{ fontSize: "1.1rem" }}
                >
                  Bebidas calientes
                </h5>
                <ul className="list-unstyled line-height-products">
                  <ButtonHotDrinks buttons={buttons} filter={filter} />
                </ul>
              </div>
            </div>
            <div className="d-flex flex-wrap posts pe-lg-4 pe-xl-5 w-100">
              <CardsProducts cards={cards} />
            </div>
          </div>
          <ButtonsPagination
            prevHandler={prevHandler}
            nextHandler={nextHandler}
          />
        </section>
      </div>
    </>
  );
};

export default Products;
