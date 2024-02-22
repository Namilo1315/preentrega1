import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1"></p>
                        <div className="mb-4 color fw-bold p-4 fs-4 " role="alert">No se encontraron productos en el Carrito!</div>
                        <Link to={"/"} className="color2 fw-bold p-2 mt-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-5">
                <div className="row">
                    <div className="col text-center ">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">

                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="text-end align-middle " colSpan={6}><a href="#" onClick={clear} className="color1 fw-bold py-2 my-2 p-2">Vaciar Carrito <img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                                </tr>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="align-middle"><img src={product.imagen} alt={product.title} width={90} /></td>
                                        <td className="text-start align-middle">{product.title}</td>
                                        <td className="text-start align-middle">${product.price}</td>
                                        <td className="text-start align-middle">{product.quantity}</td>
                                        <td className="text-start align-middle">${product.quantity * product.price}</td>
                                        <td className="text-end align-middle"><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto" /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="text-end align-middle  fw-bold " colSpan={4}>SUMA TOTAL A PAGAR:</td>
                                    <td className="text-start align-middle fw-bold">${SumaTotalProductos()}</td>
                                    <td className="text-end align-middle"><Link to={"/checkout"} className="color1 fw-bold py-2 my-2 p-2">Checkout</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Cart;