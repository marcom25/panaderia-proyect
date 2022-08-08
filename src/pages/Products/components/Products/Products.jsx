// IMPORTS DE MODULOS
import React, { useEffect, useState, useCallback } from "react";
import { CartState } from "../../../../contexts/Context";
import { TitleProducts } from "./style/Components";
import Paginator from "../Paginator/Paginator";

// PAGINATOR
import ReactPaginate from "react-paginate";
import "../Paginator/css/Paginator.css";

// IMPORTS DE COMPONENTES
import {
  ButtonAllProducts,
  ButtonBakery,
  ButtonHotDrinks,
  ButtonsPagination,
} from '../Buttons/Buttons';
import CardsProducts from '../CardsProducts/CardsProducts';
import LoaderPage from '../../../../components/common/LoaderPage/LoaderPage';

const Products = () => {
  const [allCategories, setAllCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([].slice(0, 12));

  const [sortedProducts, setSortedProducts] = useState([]);

  const {
    filterState: { sort },
  } = CartState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Refactor callback/promise hell for async/await
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://panaderia-api.herokuapp.com/products",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Acces-Control-Allow_Origin": "localhost:3000",
            },
            mode: "cors",
          }
        );
        const { data } = await res.json();
        setProducts(data);
        setAllCategories([
          "All",
          ...new Set(data.map((item) => item.category)),
        ]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (sort == "All") {
      setSortedProducts(products);
    } else setSortedProducts(products.filter((item) => item.category === sort));
  }, [sort]);

  // PAGINATOR

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(currentItems);
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  const resetPaginator = () => {
    setCurrentItems(products.slice(0, 8));
  };

  return (
    <>
      {!loading ? (
        <section className="container-xs bg-cream" style={{ padding: "0" }}>
          <div className="container-xs bg-cream pt-2 pb-5">
            <TitleProducts
              className="text-center brown-font font-poppins fw-bold"
              id="Handler"
            >
              Productos
            </TitleProducts>

            {/* mobile button */}
            <div className="text-center">
              <div className="dropdown pt-2 pb-4 d-md-none">
                <button
                  className="btn bg-brown white-font dropdown-toggle font-poppins"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Todas las categorias
                </button>
                <ul
                  className="dropdown-menu bg-cream brown-font text-center ms-04rem fw-bold"
                  aria-labelledby="dropdownMenu2"
                >
                  <ButtonAllProducts
                    buttons={allCategories}
                    currentItems={currentItems}
                    className="fw-bold bg-brown-hover"
                    onClick={() => setCurrentItems(products.slice(0, 8))}
                  />
                  <ButtonBakery buttons={allCategories} />
                  <ButtonHotDrinks buttons={allCategories} />
                </ul>
              </div>
            </div>
            {/* mobile button ^ */}

            <div className="d-flex">
              <div
                className="d-none d-md-block ps-4 pe-5"
                style={{ width: "min-content" }}
              >
                <div onClick={() => resetPaginator()}>
                  <ButtonAllProducts buttons={allCategories} />
                </div>
                <hr className="m-0" />
                <div className="filters">
                  <h5
                    className="brown-font mb-1 font-poppins fw-bold"
                    style={{ fontSize: "1.1rem" }}
                  >
                    Pastelería
                  </h5>
                  <ul className="list-unstyled line-height-products mb-3">
                    <ButtonBakery buttons={allCategories} />
                  </ul>
                </div>
                <div>
                  <h5
                    className="line-height-products mb-1 font-poppins fw-bold "
                    style={{ fontSize: "1.1rem" }}
                  >
                    Bebidas calientes
                  </h5>
                  <ul className="list-unstyled line-height-products">
                    <ButtonHotDrinks buttons={allCategories} />
                  </ul>
                </div>
              </div>
              <div
                className="d-flex flex-wrap posts pe-lg-4 pe-xl-5 w-100"
                id="style-1"
              >
                <CardsProducts
                  allCards={currentItems}
                  filteredCards={sortedProducts}
                />
              </div>
            </div>
            <div className="m-auto mt-2">
              <ReactPaginate
                breakLabel="..."
                nextLabel="Siguiente>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<Anterior"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
              />
            </div>
          </div>
        </section>
      ) : (
        <LoaderPage />
      )}
    </>
  );
};

export default Products;
