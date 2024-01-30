import ItemCount from "./ItemCount";

 
 const ItemDetail = ({item}) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-2 mt-5">
                     <img src={item.imagen} alt={item.title} className="img-fluid"/>
                </div>
                <div className="col-md-4 mt-2">
                    <h1>{item.title} </h1>
                    <p>{item.descripcion} </p>
                    <p className="fs-3"> $$ {item.price}</p>
                   <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
 }
 export default ItemDetail;