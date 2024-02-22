import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
         <div className="col-md-4 mt-4 text-center">
            <div className="imagenes1">
                <Link to={"/item/" + item.id} className=" text-decoration-none text-dark">
                  <img src={item.imagen} className="card-img-top " alt={item.title} />      
                  <div className="card-body mt-3">
                  <p className="card-text fw-bolder">{item.title} </p>
                  </div>          
                </Link >
            </div>
         </div>
    )
 }
  export default Item;