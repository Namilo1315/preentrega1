import { Link } from "react-router-dom";



const Logo = () => {
    return(
     <Link to={"/"}>
        <img src="https://image1.cdnsbg.com/desktop/new_sbg/assets/common/sbg-logos/svg-format/desktop-logo-SmartBuyGlasses.svg?q=100" alt="logo" width={200} />
     </Link> 
    )
}
export default Logo;