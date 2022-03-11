// IMPORTS DE CSS
import { useState } from "react";
import { CartState } from "../$-context/Context";
import "../css/Colors.css";

export const ButtonAllProducts = ({ buttons, filter }) => {
<<<<<<< HEAD
  console.log("buttons:", buttons);
  const { filterDispatch } = CartState();
=======
  // console.log('buttons:', buttons);
  const {
    filterDispatch,
  } = CartState();
>>>>>>> 7273218a6fb027e0f9dc015ba29c9676c173a6c0
  return (
    <div>
      {buttons.map((cat, i) => {
        if (cat === "All") {
          console.log("cat:", cat);
          return (
            <li
              key={i}
              className="brown-font line-height-products d-block mb-1 container-category font-poppins"
<<<<<<< HEAD
              style={{ cursor: "pointer" }}
              onClick={() =>
                filterDispatch({
                  type: "SORT_ALL",
                  payload: cat,
                })
              }
=======
              style={{cursor: "pointer"}}
              onClick={() => filterDispatch({
                type: "SORT",
                payload: cat
              })}
>>>>>>> 7273218a6fb027e0f9dc015ba29c9676c173a6c0
            >
              Todos los productos
            </li>
          );
        }
      })}
    </div>
  );
};

export const ButtonHotDrinks = ({ buttons, filter }) => {
  const { filterDispatch } = CartState();
  return (
    <div>
      {buttons.map((cat, i) => {
        if (cat === "Café" || cat === "Té" || cat === "Chocolate") {
          return (
            <li
              key={i}
<<<<<<< HEAD
              onClick={() =>
                filterDispatch({
                  type: "FILTER_BY_HOT_DRINKS",
                  payload: cat,
                })
              }
=======
              onClick={() => filterDispatch({
                type: "SORT",
                payload: cat
              })}
>>>>>>> 7273218a6fb027e0f9dc015ba29c9676c173a6c0
              className="brown-font d-block container-category font-bitter"
            >
              {cat}
            </li>
          );
        }
      })}
    </div>
  );
};

export const ButtonBakery = ({ buttons, filter }) => {
  const { filterDispatch } = CartState();
  return (
    <div>
      {buttons.map((cat, i) => {
        if (
          cat !== "Café" &&
          cat !== "Té" &&
          cat !== "Chocolate" &&
          cat !== "All"
        ) {
          return (
            <li
              key={i}
<<<<<<< HEAD
              onClick={() =>
                filterDispatch({
                  type: "FILTER_BY_BAKERY",
                  payload: cat,
                })
              }
=======
              onClick={() => filterDispatch({
                type: "SORT",
                payload: cat
              })}
>>>>>>> 7273218a6fb027e0f9dc015ba29c9676c173a6c0
              className="brown-font d-block container-category font-bitter "
            >
              {cat}
            </li>
          );
        }
      })}
    </div>
  );
};

<<<<<<< HEAD
export const ButtonsPagination = ({ products }) => {
  const cardsPerPage = 12;
  const allCategories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [cards, setCards] = useState(products.splice(0, cardsPerPage));
=======
export const ButtonsPagination = ({products, sortedProducts, setSortedProducts}) => {
  

  const cardsPerPage = 12;
>>>>>>> 7273218a6fb027e0f9dc015ba29c9676c173a6c0

  const [currentPage, setCurrentPage] = useState(0);
 
  const totalCards = products.length;

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstNextIndex = nextPage * cardsPerPage;
    if (firstNextIndex === totalCards) return;

    setSortedProducts(products.splice(firstNextIndex, cardsPerPage));
    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    const firstPrevIndex = prevPage * cardsPerPage;
    if (firstPrevIndex < 0) return;

    setSortedProducts(products.splice(firstPrevIndex, cardsPerPage));
    setCurrentPage(prevPage);
  };

  return (
    <div className="text-center p-2">
      <div aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a
              className="page-link bg-brown cream-font font-poppins rounded-3"
              href="#Handler"
              aria-label="Previous"
            >
              <span onClick={prevHandler} aria-hidden="true">
                Anterior
              </span>
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link bg-brown cream-font font-poppins rounded-3"
              href="#Handler"
              aria-label="Next"
            >
              <span onClick={nextHandler} aria-hidden="true">
                Siguiente
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
