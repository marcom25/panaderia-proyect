// IMPORTS DE CSS
import { useState } from "react";
import { CartState } from "../../../../contexts/Context";
import "../../../../css/Colors.css";

export const ButtonAllProducts = ({ buttons, currentItems }) => {
  const { selectedItem, onChangeSelectedItem } = CartState();
  const {
    filterDispatch,
  } = CartState();
  return (
    <ul className="p-md-0 mb-1">
      {buttons.map((cat, i) => {
        if (cat === "All") {
          return (
            <li
              key={i}
              className="brown-font line-height-products d-block mb-1 container-category font-poppins"
              style={{cursor: "pointer", fontWeight: selectedItem === cat ? 'bold' : 'normal'}}
              onClick={() => {filterDispatch({
                type: "SORT",
                payload: currentItems
              })
              onChangeSelectedItem(cat);
            }}
            >
              Todos los productos
            </li>
          );
        }
      })}
    </ul>
  );
};

export const ButtonHotDrinks = ({ buttons, filter } ) => {
  const { filterDispatch } = CartState();
  const { selectedItem, onChangeSelectedItem } = CartState();
  return (
    <ul className="p-md-0">
      {buttons.map((cat, i) => {
        if (cat === "Café" || cat === "Té" || cat === "Chocolate") {
          return (
            <li
              key={i}
              onClick={() =>{ filterDispatch({
                type: "SORT",
                payload: cat
              })
              onChangeSelectedItem(cat);
            }}
              className="brown-font d-block container-category font-bitter"
              style={{cursor: "pointer", fontWeight: selectedItem === cat ? 'bold' : 'normal'}}
            >
              {cat}
            </li>
          );
        }
      })}
    </ul>
  );
};

export const ButtonBakery = ({ buttons, filter }) => {
  const { filterDispatch } = CartState();
  const { selectedItem, onChangeSelectedItem } = CartState();
  return (
    <ul className="p-md-0">
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
              onClick={() => {filterDispatch({
                type: "SORT",
                payload: cat
              })
              onChangeSelectedItem(cat);
            }}
              className="brown-font d-block container-category font-bitter "
              style={{cursor: "pointer", fontWeight: selectedItem === cat ? 'bold' : 'normal'}}
            >
              {cat}
            </li>
          );
        }
      })}
    </ul>
  );
};

export const ButtonsPagination = ({products, sortedProducts, setSortedProducts}) => {
  

  const cardsPerPage = 12;

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
