import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);
            
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <>
            <div className="row my-1">
                <div className="col-md-4" >
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="color2 p-2 fw-bold" onClick={decrementar}>-</button>
                        <button type="button" className="color2 p-2 fw-bold">{counter}</button>
                        <button type="button" className="color2 p-2 fw-bold" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-6 ">
                    {itemAdded ? <Link to={"/cart"} className=" mt-2 color2 p-2 fw-bold ">Terminar Mi Compra</Link> : <button type="button" className="color2 p-2 fw-bold" onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </>
    )
}

export default ItemCount;