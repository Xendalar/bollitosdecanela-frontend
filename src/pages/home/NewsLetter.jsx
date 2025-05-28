

const NewsLetter = () => {
    return (
        <div className="w-full md:w-2/3 mx-auto flex flex-col items-center p-10">
            <h3 className="text-secondary font-semibold text-center text-4xl">
                ¡Suscríbete a nuestro boletín para recibir nuestras últimas recetas!
            </h3>
            <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
                Correos semanaldx con las últimas recetas, consejos de cocina y mucho más. <br /> ¡No te lo pierdas!
            </p>

            <div className="mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20">
                <input className=" flex flex-grow px-4 py-4 rounded text-[#1b2629] outline-none
            placeholder:text-gray-400" type="text" placeholder="Tu nombre" />
                <input className=" flex flex-grow px-4 py-4 rounded text-[#1b2629] outline-none
            placeholder:text-gray-400" type="text" placeholder="Correo electrónico" />
                <button className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white 
                    w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] 
                    focus:outline-none rounded-lg'>
                    ¡Suscríbete!
                </button>
            </div>
        </div>
    )
}

export default NewsLetter