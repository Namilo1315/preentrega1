import banner1 from "../assets/baner1.webp";
import banner2 from "../assets/baner2.webp";
 
const Baner = () => {
    return(
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6  col-sx-12 text-center m-auto">
                <img className="img-fluid mt-2" src={banner1} alt="banaer1" />
            </div>
            <div className="col-md-6 col-sx-12 text-center m-auto">
            <img className="img-fluid mt-2" src={banner2} alt="banaer2" />
            </div>
        </div>
        
    </div>
    )
}
 export default Baner;