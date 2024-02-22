import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
//import { Link } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {cart, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if(CantTotalProductos()==0) {{
        return(
            <div className="container"> 
            <div className="row my-5">
            <div className="col text-center">
                {orderId ? <div class="color p-5 text-center" role="">
                    <p className="display-1"></p>
                    <h1>¡Muchas Gracias por tu Compra!</h1>
                    <p className="fs-5" >Tu ID para retirar tu Compra es: <b>{orderId}</b></p>
                </div> : ""}
            </div>
        </div>
        </div>
        )
    }}

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.idproducto, title:item.title, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumaTotalProductos();
        const order = {buyer:buyer, items:items, date:date, total:total};

        // Inserto Documento en Firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col text-center">
                    <h1 className=" color py-3"> Tu Checkout</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-3">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Ingrese su Nombre:</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Ingrese su Email:</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Ingrese su Teléfono.</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="color fw-bold py-2 my-2 p-2" onClick={generarOrden}>Generar Orden de compra</button>
                    </form>
                </div>
                <div className="col-md-6 text-center mt-3">
                    <table className="table">
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle"><img src={product.imagen} alt={product.title} width={90} /></td>
                                    <td className="text-start align-middle fw-bold">{product.title}</td>
                                    <td className="text-start align-middle fw-bold">${product.price}</td>
                                    <td className="text-start align-middle fw-bold">{product.quantity}</td>
                                    <td className="text-start align-middle fw-bold">${product.quantity * product.price}</td>
                                </tr>
                            )}
                            <tr>
                                <td className="text-end align-middle fw-bold" colSpan={4}>TOTAL A PAGAR:</td>
                                <td className="text-start align-middle fw-bold">${SumaTotalProductos()}</td>
                            
                            </tr>
                           
                        </tbody>
                        
                    </table>
                    <p className=" mt-5 color3 fw-bold py-3 my-2 p-3 fs-4">Muchas Gracias</p>
                </div>
            </div>
           
        </div>
    )
}

export default Checkout;