import CartWidget from "./CartWidget"
import Logo1 from "./logo"

const NavBar = () => {
    return (
         <div className="container my-3">
            <div className="row">               
                 <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                      <a className="navbar-brand" href="#"> <Logo1/> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                       </button>                    
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="col-md-9 d-flex agling-items-center justify-content-center">
                            <ul className="nav agling-items-center">
                                <li className="nav-item">
                                    <a className="nav-link text-dark fs-5" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fs-5" href="#">Lentes de Sol</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fs-5" href="#">Lentes de contacto</a>
                                </li>
                                < li className="nav-item">
                                    <a className="nav-link text-dark fs-5" href="#">Anteojos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark fs-5" href="#">Contacto</a>
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
 export default NavBar