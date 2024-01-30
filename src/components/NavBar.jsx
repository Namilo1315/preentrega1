import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo1 from "./logo";

const NavBar = () => {
    return (
         <div className="container my-3">
            <div className="row">               
                 <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                      <NavLink className="navbar-brand" to={"/"}> <Logo1/> </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                       </button>                    
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col-md-9 d-flex agling-items-center justify-content-center">
                            <ul className="nav agling-items-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/"}>Productos</NavLink>
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
                                <li className="nav-item">
                                    <NavLink className="nav-link text-dark fs-5" activeclassname="active" to={"/"}>Contacto</NavLink>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="col-md-1 d-flex align-items-center justify-content-end">
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