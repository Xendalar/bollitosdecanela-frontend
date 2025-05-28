import { Link } from "react-router-dom";
const DesktopNav = ({ menuItems, menuLinks, logo }) => {
    return (
        <div className="h-16 flex justify-between items-center px-6 lg:px-12">
            <a href="/">
                <img className="h-12 w-auto" src={logo} alt="Bollitos de Canela" />
            </a>
            <ul className="flex gap-7">
                {
                    menuItems?.map((item, index) => (
                        <li key={index}>
                            <Link to={menuLinks[item]} className="font-medium capitalize text-secondary">{item}</Link>
                        </li>
                    ))
                }
            </ul>

            {/* login and sign up*/}

            <ul className="flex items-center gap-4 font-medium">
                <li>
                    <button className="text-secondary px-4 py-2 rounded">Accede</button>
                </li>
                <li>
                    <button className="text-secondary px-4 py-2 rounded">Regístrate</button>
                </li>
            </ul>
        </div>
    )
}

export default DesktopNav
