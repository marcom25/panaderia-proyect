// IMPORTS DE CSS
import { useState } from "react";
import { CartState } from "../$-context/Context";
import "../css/Colors.css";


export const ButtonAllProducts = ({ buttons, filter }) => {
  // console.log('buttons:', buttons);
  const {
    filterDispatch,
  } = CartState();
  return (
    <div>
      {buttons.map((cat, i) => {
        if (cat === "All") {
          console.log('cat:', cat)
          return (
            <li
              key={i}
              className="brown-font line-height-products d-block mb-1 container-category font-poppins"
              style={{cursor: "pointer"}}
              onClick={() => filterDispatch({
                type: "SORT",
                payload: cat
              })}
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
  const {
    filterDispatch,
  } = CartState();
  return (
    <div>
      {buttons.map((cat, i) => {
        if (cat === "Café" || cat === "Té" || cat === "Chocolate") {
          return (
            <li
              key={i}
              onClick={() => filterDispatch({
                type: "SORT",
                payload: cat
              })}
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
  const {
    filterDispatch,
  } = CartState();
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
              onClick={() => filterDispatch({
                type: "SORT",
                payload: cat
              })}
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

export const ButtonsPagination = ({products}) => {
  

  const cardsPerPage = 12;
  const allCategories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];
 
  const [currentPage, setCurrentPage] = useState(0);
  const [cards, setCards] = useState(products.splice(0, cardsPerPage));
  


  const totalCards = products.length;

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const firstNextIndex = nextPage * cardsPerPage;
    if (firstNextIndex === totalCards) return;

    setCards(products.splice(firstNextIndex, cardsPerPage));
    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    const firstPrevIndex = prevPage * cardsPerPage;
    if (firstPrevIndex < 0) return;

    setCards(products.splice(firstPrevIndex, cardsPerPage));
    setCurrentPage(prevPage);
  };



  return (
    <div className="text-center p-2">
      <div aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a
              class="page-link bg-brown cream-font font-poppins rounded-3"
              href="#Handler"
              aria-label="Previous"
            >
              <span onClick={prevHandler} aria-hidden="true">
                Anterior
              </span>
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link bg-brown cream-font font-poppins rounded-3"
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
