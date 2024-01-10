import iconCart from "../assets/bag-check-fill.svg";


const CartWidget = () => {
    return(
        <button type="button" className="btn btn position-relative">
                <img src={iconCart} alt="carrito"  width={24}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}
 export default CartWidget;