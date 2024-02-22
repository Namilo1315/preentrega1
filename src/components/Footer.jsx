import wp from "../assets/whatsapp2.png";

const Footer = () => {

    return(
      
    <footer id="footer" class="footer1">
         <div id="whatsapp-button">
        <a href="https://wa.me/542616246767?text=¡Hola,%20quisiera%20mas%20información!" target="_blank"> <img src={wp} alt="Carrito" width={24} />
        </a>
    </div>
        <div class=" m-auto">
            

          
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="texto-footer">SmartBuyGlasses™ es un distribuidor líder independiente de las mejores gafas de diseño en el mundo desde 2006 y no es propiedad ni está afiliada a las marcas que vende menos que se indique lo contrario. Todas las marcas y nombres comerciales que aparecen en nuestras páginas son propiedad de sus respectivas empresas que retienen todos los derechos.</p>
                    </div>
                     <div className=" text-center fw-bold">
                        <p> Gracias CoderHouse - NL - 2024</p>
                     </div>
                </div>
            </div>
    </footer>
    
       
    )
}

export default Footer;