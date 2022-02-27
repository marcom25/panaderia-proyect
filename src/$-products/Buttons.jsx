export const ButtonAllProducts = ({ buttons, filter }) => {
  return (
    <div>
      {buttons.map((cat, i) => {
        if (cat === "All") {
          return (
            <li
              className="brown-font line-height-products d-block mb-1 container-category"
              onClick={() => filter(cat)}
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
  return (
    <div>
      {buttons.map((cat, i) => {
        if (cat === "Café" || cat === "Té" || cat === "Chocolate") {
          return (
            <li
              onClick={() => filter(cat)}
              className="brown-font d-block container-category"
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
              onClick={() => filter(cat)}
              className="brown-font d-block container-category"
            >
              {cat}
            </li>
          );
        }
      })}
    </div>
  );
};

export const ButtonsPagination = ({ prevHandler, nextHandler }) => {
  return (
    <div className="text-center p-2">
      <div aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a
              class="page-link bg-brown white-font font-pink-hover"
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
              class="page-link bg-brown white-font font-pink-hover"
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
