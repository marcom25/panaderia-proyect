// IMPORTS DE MODULOS
import React, { useEffect, useState } from 'react';
import { CartState } from '../../../../contexts/Context';

// IMPORTS DE COMPONENTES

import {
  ButtonAllProducts,
  ButtonBakery,
  ButtonHotDrinks,
  ButtonsPagination,
} from '../Buttons/Buttons.jsx';
import CardsProducts from '../CardsProducts/CardsProducts.jsx';
import Loader from '../../../../components/common/Loader/Loader.jsx';

const Products = () => {
  const [allCategories, setAllCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([].slice(0, 12));

  const [sortedProducts, setSortedProducts] = useState([]);
  

  const {
    filterState: { sort },
  } = CartState();


  useEffect(() => {
    // Refactor callback/promise hell for async/await
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://panaderia-api.herokuapp.com/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Acces-Control-Allow_Origin': 'localhost:3000',
          },
          mode: 'cors',
        });
        const { data } = await res.json();
        setProducts(data);
        setAllCategories([
          'All',
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
    if (sort == 'All') {
      setSortedProducts(products);
    } else setSortedProducts(products.filter((item) => item.category === sort));

  }, [sort]); 

  return (
    <>
      {!loading ? (
        <section className="container-xs bg-cream" style={{ padding: '0' }}>
          <div className="container-xs bg-cream pt-2 pb-5">
            <h3
              className="py-4 text-center brown-font font-poppins fw-bold"
              id="Handler"
            >
              Productos
            </h3>

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
                    className="fw-bold bg-brown-hover"
                  />
                  <ButtonBakery buttons={allCategories} />
                  <ButtonHotDrinks buttons={allCategories} />
                </ul>
              </div>
            </div>
            {/* mobile button ^ */}

            <div className="d-flex" style={{height: '90vh', overflow: 'hidden'}}>
              <div
                className="d-none d-md-block ps-4 pe-5"
                style={{ width: 'min-content' }}
              >
                <ButtonAllProducts buttons={allCategories} />
                <hr className="m-0" />
                <div className="filters">
                  <h5
                    className="brown-font mb-1 font-poppins fw-bold"
                    style={{ fontSize: '1.1rem' }}
                  >
                    Pasteler??a
                  </h5>
                  <ul className="list-unstyled line-height-products mb-3">
                    <ButtonBakery buttons={allCategories} />
                  </ul>
                </div>
                <div>
                  <h5
                    className="line-height-products mb-1 font-poppins fw-bold "
                    style={{ fontSize: '1.1rem' }}
                  >
                    Bebidas calientes
                  </h5>
                  <ul className="list-unstyled line-height-products">
                    <ButtonHotDrinks buttons={allCategories} />
                  </ul>
                </div>
              </div>
              <div className="d-flex flex-wrap posts pe-lg-4 pe-xl-5 w-100 scrollbar" id="style-1" style={{overflow: 'scroll', overflowX: 'hidden'}}>
                <CardsProducts
                  allCards={products}
                  filteredCards={sortedProducts}
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loader/>
      )}
    </>
  );
};

export default Products;
