


const ItemListContainer = ({greeting}) => {
    return(
       <div className="container">
        <div className="row">
            <div className="col text-center"> 
            <div className="alert alert-warning p-3 display-5" role="alert">{greeting}</div>
            </div>
        </div>
       </div>


    )      
}
 export default ItemListContainer;