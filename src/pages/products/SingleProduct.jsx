import { use, useEffect } from "react";
import { useLoaderData } from "react-router-dom"


const singleProduct = () => {

    const item = useLoaderData();

    /* nos permite resetear el scroll, debido a que el routing lo guarda */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /* calcular tiempo de preparación */
    const extractNumber = (timeString) => {
        let timeArray = timeString.split(" ");
        return parseInt(timeArray[0], 10);
    }

    let preparationTime = extractNumber(item?.more?.[0]?.tiempo_de_preparacion);
    let cookingTime = extractNumber(item?.more?.[0]?.tiempo_de_cocinado);
    let totalTime = preparationTime + cookingTime;

    return (
        <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell">
            <article>
                <div className="md:max-w-3xl mx-auto md:mt-20">
                    <picture >
                        <img src={item.imagen_de_portada} alt="Portada de la receta" className="md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto" />
                    </picture>
                </div>

                <div className="bg-white md:my-[5rem] pt-1 pb-8 md:rounded-xl">
                    <div className="px-8">
                        <h1 className="text-4xl mt-12 text-secondary">{item.nombre}</h1>
                        {/* quizás metemos una breve descripción aquí, pero hay que implementar en la bd */}
                        <article className="bg-rose-50 mt-6 p-5 rounded-xl">
                            <h3 className="text-xl font-semibold ml-2">Tiempo de preparación</h3>
                            <ul className="list-disc mt-3 ml-8 text-lg marker:text-orange-500">
                                <li className="pl-3">
                                    <p>
                                        <span>Total:</span> <span>{totalTime} minutos.</span>
                                    </p>
                                </li>
                                <li className="pl-3 mt-3">
                                    <p>
                                        <span>Preparación:</span>{item?.more?.[0]?.tiempo_de_preparacion}<span></span>
                                    </p>
                                </li>
                                <li className="pl-3 mt-3">
                                    <p>
                                        <span>Cocinado:</span>{item?.more?.[0]?.tiempo_de_cocinado}<span></span>
                                    </p>
                                </li>
                            </ul>
                        </article>
                        <div className="mt-5">
                            <h3 className="text-xl font-semibold ml-2">Tiempo de preparación</h3>
                            <ul>
                                {
                                    item?.ingredientes?.map((ingredient, index) => (
                                        <li key={index} className="list-disc mt-3 ml-8 text-lg marker:text-blue-500">
                                            <span className="pl-3">{ingredient.cantidad} {ingredient.unidad} de {ingredient.nombre}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl font-semibold ml-2">Instrucciones</h3>
                            <ul className="max-w-full">
                                {
                                    Array.isArray(item?.instrucciones) ? (
                                        item.instrucciones.map((instruction, index) => (
                                            <li key={index} className="list-disc mt-3 ml-8 text-lg marker:text-green-500">
                                                <span className="pl-3 break-words whitespace-pre-wrap">{instruction}</span>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="list-disc mt-3 ml-8 text-lg marker:text-green-500">
                                            <span className="pl-3 break-words whitespace-pre-wrap">{item?.instrucciones}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                        {/* también tenemos comentarios en la bd, pero de momento no implementamos */}
                    </div>
                </div>
            </article>

        </section>
    )
}

export default singleProduct
