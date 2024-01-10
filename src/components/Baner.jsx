import banner1 from "../assets/baner1.webp";
import banner2 from "../assets/baner2.webp";
 
const Baner = () => {
    return(
    <div className="container">
        <div className="row">
            <div className="col-md-6  col-sx-12 text-center">
                <img src={banner1} alt="banaer1" />
            </div>
            <div className="col-md-6 col-sx-12 text-center">
            <img src={banner2} alt="banaer2" />
            </div>
        </div>
    </div>
    )
}
 export default Baner;