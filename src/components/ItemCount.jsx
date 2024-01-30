import { useEffect, useState } from "react";



const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock); 

    const incremtar = () => {
        if (contador < itemStock)
        setContador(contador + 1)
    }

    const decrementar = () => {
        if (contador > 1 )
        setContador(contador - 1)
    }
   
    const onAdd = () => {
        if (contador <= itemStock)
        setContador(1)
    }
     useEffect (() => {
        setItemStock(stock)
     },[stock])

    return(
        <>
         <div className="row my-1">
           <div className="col-md-4">
            <div className="btn-group" role="group" aria-label="basic example">
              <button type="button" className="btn btn-warning" onClick={decrementar}>-</button>
              <button type="button" className="btn btn-warning" onClick={decrementar}>{contador}</button>
              <button type="button" className="btn btn-warning" onClick={incremtar}>+</button>
            </div>
           </div>
         </div>
         <div className="row my-1">
           <div className="col-md-5">
            
              <button type="button" className="btn btn-warning" onClick={onAdd}>Agregar al carrito</button>
             
            </div>
           </div>
         
        </>



    )
}
export default ItemCount;