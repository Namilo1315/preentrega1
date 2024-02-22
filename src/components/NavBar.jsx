import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";


const NavBar = () => {
    return (
         <div className="container my-3">
            <div className="row">               
                 <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid ">
                      <NavLink className="navbar-brand" to={"/"}> <Logo/> </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                       </button>                    
                     <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <div className="col-md-10 d-flex agling-items-center justify-content-end ">
                            <ul className="nav agling-items-center lista">
                                <li className="nav-item ">
                                    <NavLink className="nav-link text-dark fs-5 " activeclassname="active" to={"/"}>Productos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/category/anteojosdesol"}>Anteojos de Sol</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/category/lentesdecontacto"}>Lentes de Contacto</NavLink>
                                </li>
                                < li className="nav-item">
                                    <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/category/anteojos"}>Anteojos</NavLink>
                                </li>
                                <li className="nav-item color1" >
                                    <NavLink className=" color1 nav-link text-dark fs-5" activeclassname="active" to={"https://wa.me/542616246767?text=¡Hola,%20quisiera%20mas%20información!"}target="_blank">Consultanos</NavLink>
                                </li>
                            </ul>
                             
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-end">
                          <CartWidget/>
                        </div>                
                    </div>
                     </div>
                   </nav>      
            </div>
         </div>
        
         
    
    )
}
 export default NavBar;