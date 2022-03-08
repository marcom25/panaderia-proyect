// IMPORTS DE MODULOS
import React, { useEffect, useState } from "react";
import { CartState } from "../$-context/Context";

// IMPORTS DE COMPONENTES

import {
  ButtonAllProducts,
  ButtonBakery,
  ButtonHotDrinks,
  ButtonsPagination,
} from "./Buttons";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const renderManager = 0;
  
  let sortedProducts = [];

  const cardsPerPage = 12;

  const [allCategories, setAllCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([].splice(0, 12));

  // const [cards, setProducts] = useState();

  const {
    filterState: { sort, byBakery, byHotDrinks },
  } = CartState();

  useEffect(() => {
    fetch("http://localhost:8080/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Acces-Control-Allow_Origin": "localhost:3000",
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.data);
        console.log('Aca me estoy trayendo el primer producto:', res.data[0]);
        setAllCategories([
          "All",
          ...new Set(res.data.map((item) => item.category)),
        ]);
        setLoading(true);

        return(()=> {
          setLoading(false)
        })
      })
      .catch((error) => console.log(error));
  }, [renderManager]);

  console.log('sort:', sort);
  console.log('byBakery:', byBakery);
  console.log('byHotDrinks:', byHotDrinks);
  if (sort) {
    sortedProducts = products.splice(0, 12);
    setProducts(sortedProducts);
  }

  if (byBakery) {
    sortedProducts = products.filter(
      (item) => item.category === byBakery
    );

    setProducts(sortedProducts);
  }

  if (byHotDrinks) {
    sortedProducts = products.filter(
      (item) => item.category === byHotDrinks
    )
    setProducts(sortedProducts);
  }

  

  return (
    <>
      {loading ? (
        <section className="container-xs bg-cream" style={{ padding: "0" }}>
          <div className="container-xs bg-cream pt-2 pb-5">
            <h3
              className="py-4 text-center brown-font font-poppins fw-bold"
              id="Handler"
            >
              Productos
            </h3>
            {/* mobile button */}
            <div className="text-center">
              <div class="dropdown pt-2 pb-4 d-md-none">
                <button
                  class="btn bg-brown white-font dropdown-toggle font-poppins"
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
                    buttons={allCategories}
                    className="fw-bold bg-brown-hover"
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
                <ButtonAllProducts buttons={allCategories} />
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
              <div className="d-flex flex-wrap posts pe-lg-4 pe-xl-5 w-100">
                <SingleProduct cards={products} />
              </div>
            </div>
            {/* <ButtonsPagination products={products} /> */}
          </div>
        </section>
      ) : (
        <div className="bg-cream">Loading...</div>
      )}
    </>
  );
};

export default Products;
