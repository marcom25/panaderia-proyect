
const ImgBlock = ({image, textAtributes, imgAtributes, p1, p2, p3, p4, h1}) => {


    return ( 
        <>
            <div className={imgAtributes}>
                <img className='p-3 w-100' src={image} alt=''/>
            </div>
            <div className={textAtributes}>
                <div className="pt-4 pb-3 p-md-0">
                    <h1 className='white-font text-center font-bitter texto pb-2'>{h1}</h1>
                    <p className='text-center white-font font-poppins'>{p1}</p>
                    <p className='text-center white-font font-poppins'>{p2}</p>
                    <p className='text-center white-font font-poppins'>{p3}</p>
                    <p className='text-center white-font font-poppins'>{p4}</p>
                </div>
            </div>
        </>
    );
}
 
export default ImgBlock;