import { Link } from "react-router-dom"
import { GoClock } from "react-icons/go"

/* lo dejamos fuera porque si lo metemos dentro de Card se renderiza cada vez que cargamos Card, mejoramos rendimiento*/
const categoryStyles = {
    entrantes: { backgroundColor: "rgba(89, 135, 31, 0.29)", color: "#59871f" },
    desayunos: { backgroundColor: "rgba(242, 207, 102, 0.29)", color: "#F2CF66" },
    principales: { backgroundColor: "rgba(191, 168, 126, 0.29)", color: "#BFA87E" },
    postres: { backgroundColor: "rgba(140, 103, 58, 0.29)", color: "#8C673A" },
    bebidas: { backgroundColor: "rgba(217, 99, 30, 0.29)", color: "#D9631E" },
    default: { backgroundColor: "rgba(200, 200, 200, 0.29)", color: "#000000" }
};

const Card = ({ item }) => {

    const getCategoryStyle = (category) => {
        return categoryStyles[category] || categoryStyles.default;
    };
    const categoryStyle = getCategoryStyle(item?.categoria);

    return (
        <div className="container mx-auto flex justify-center md:justify-start">
            <div className="w-80">
                <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg h-72">
                    <div className="h-48 w-full overflow-hidden">
                        <img
                            src={item?.imagen_de_portada}
                            alt={item.nombre}
                            className="rounded-t-lg w-full h-full object-cover"
                        />
                    </div>
                    <div className="py-4 px-5 rounded-lg bg-white">
                        <Link to={`/items/${item._id}`}>
                            <h1 className="text-gray-700 font-bold text-xl hover:text-gray-900 hover:cursor-pointer"> {/* podemos añadir truncate si vemos que nos da problemas el texto */}
                                {item?.nombre}
                            </h1>
                        </Link>
                        <div className="flex justify-between items-center flex-wrap">
                            <button className={`capitalize mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300`}
                                style={{
                                    backgroundColor: categoryStyle.backgroundColor, /* podemos añadir una norma por si no hubiera color */
                                    color: categoryStyle.color
                                }}>
                                {item?.categoria}
                            </button>
                            <div className="flex items-center py-2 mt-6">
                                <GoClock />
                                <span className="ml-1">
                                    {item?.more?.[0]?.tiempo_de_preparacion} {/* por algún motivo Mongo crea un objeto más dentro de more, por lo que primero accedemos a more y luego al primer elemento del array */}
                                </span>
                            </div>
                            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                                <span className="font-medium">{item?.more?.[0]?.dificultad}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card