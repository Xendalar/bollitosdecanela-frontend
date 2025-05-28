import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aboutImage from '../../assets/about-1.jpeg'; 

const About = () => {
    return (
        <section className="px-6 lg:px-12 py-20 overflow-hidden">
            <h1 className="text-center text-3xl pt-10 pb-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
                Sobre nosotros
            </h1>
            <p className="text-justify sm:w-1/2 mx-auto mb-20 text-lg">
                Somos una pareja: Alfredo y Erika.<br />Alfredo viene de la mejor tierra del mundo: Andalucía y aporta su pasión por la cocina mediterránea.<br />Erika viene de Francia y ama la repostería con
                toda su alma (tanto que siempre mira mal a Alfredo cuando quiere hacer 20 prociones de una tarta).
                <br />Juntos hemos creado este sitio web para compartir nuestras recetas favoritas y ayudar a otros a disfrutar de la cocina tanto como nosotros sin tocarle el pelo a un solo animal.
            </p>

            <article className="bg-white lg:grid lg:h-screen lg:place-content-center flex flex-col items-center justify-center">
                <div
                    className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
                >
                    <div className="w-full text-left px-8 md:text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Aumenta tu recetario
                            <strong className="text-secondary"> vegano </strong>
                            a nuestro lado
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            Aprende todo lo que hace falta para cocinar deliciosas recetas veganas, desde las más sencillas hasta las más elaboradas. Te enseñaremos a preparar platos que no solo son buenos para ti, sino también para el planeta.
                        </p>

                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <Link to="/recetas">
                                <button
                                    className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white 
                    transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] 
                    focus:outline-none rounded-lg'                                >
                                    Empieza ahora
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='mx-auto max-w-md text-gray-900 md:block mt-4'>
                    <img src={aboutImage} alt="recetario vegano"/>
                    </div>
                </div>
            </article>

            <div className='contanier mx-auto px-6 py-40'>
                <div className='flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-86 bg-white shadow-2xl rounded-lg p-5 gap-4'>
                    <div className='w-8/12 text-2xl'>
                        <FaQuoteLeft className='float-left mr-2 sm:m-4' />
                        <span className='flex'>Creemos en el veganismo como modo de vida y creemos que es posible cuidar la alimentación
                            y amarse a uno mismo a través de la cocina sin dañar a los animales ni al medio ambiente.
                        </span>
                    </div>
                    <Link to="/recetas">
                    <button className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white 
                    transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] 
                    focus:outline-none rounded-lg'>
                        ¡Comienza tu revolución!
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default About
