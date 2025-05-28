import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({ menuItems, menuLinks, logo, onOpen, onClose, hideLeft }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      onOpen && onOpen();
    } else {
      onClose && onClose();
    }
  };

  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <Link to="/">
        <img className="h-12 w-auto" src={logo} alt="Bollitos de Canela" />
      </Link>

      {/* burgerBtn, estilos en CSS */}
      <button className="burguerBtn z-50 relative" onClick={handleClick}>
        <span className={`rectangle rectangle--top rectangle--small ${isOpen ? 'open' : ''}`}></span>
        <span className={`rectangle rectangle--middle ${isOpen ? 'open' : ''}`}></span>
        <span className={`rectangle rectangle--bottom rectangle--small ${isOpen ? 'open' : ''}`}></span>
      </button>

      {/* Menú móvil, aparece y desaparece con click en burguerBtn*/}
      <div className={`transition-all w-full h-full fixed bg-primary z-40 top-0 ${hideLeft} flex justify-center items-center`}>
        <div>
          <ul className='flex flex-col gap-5'>
            {menuItems?.map((item, index) => (
              <li key={index} className="my-4 text-2xl">
                <Link 
                    to={menuLinks[item]} 
                    className="font-medium capitalize text-secondary"
                    onClick={handleClick} // Añade esto para cerrar el menú al hacer clic
                >
                    {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 text-xl mt-20">
            <li>
              <button className="text-secondary px-4 py-2 border-b-2 border-secondary">Accede</button>
            </li>
            <li>
              <button className="text-secondary px-4 py-2 border-b-2 border-secondary">Regístrate</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNav