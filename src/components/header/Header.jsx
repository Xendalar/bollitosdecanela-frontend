import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav.jsx";
import logo from "/logo.png";

const Header = () => {
    const [hideLeft, setHideLeft] = useState("-left-[1000px]");
    
    /* Hemos tenido que cambiar la estructura del routing de la barra de navegación debido al problema con "Sobre nosotros" ya que lo buscaba literalmente así */
    const menuLinks = {
        "recetas": "/recetas",
        "Sobre nosotros": "/sobre-nosotros",
        "Contacto": "/contacto"
    };

    const menuItems = Object.keys(menuLinks);

    const onOpen = () => {
        setHideLeft("left-0");
    }

    const onClose = () => {
        setHideLeft("-left-[1000px]");
    }

    return (
        <>
            <div className="hidden md:block">
                <DesktopNav menuItems={menuItems} menuLinks={menuLinks} logo={logo} />
            </div>
            <div className="md:hidden">
                <MobileNav 
                    menuItems={menuItems}
                    menuLinks={menuLinks}
                    logo={logo} 
                    hideLeft={hideLeft}
                    onOpen={onOpen}
                    onClose={onClose}  
                />
            </div>
        </>
    )
}

export default Header
