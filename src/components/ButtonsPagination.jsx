const ButtonsPagination = ({prevHandler, nextHandler}) => {

    return ( 
        <div className='text-center p-2'>
            <div aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link bg-brown white-font font-pink-hover" href="#Handler" aria-label="Previous">
                            <span onClick={prevHandler} aria-hidden="true">Anterior</span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link bg-brown white-font font-pink-hover" href="#Handler" aria-label="Next">
                        <span onClick={nextHandler} aria-hidden="true">Siguiente</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default ButtonsPagination;