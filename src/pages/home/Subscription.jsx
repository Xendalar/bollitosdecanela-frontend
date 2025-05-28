import React from 'react'

const Subscription = () => {
    return (
        <div className='bg-white py-16 rounded-t-md'>
            <div className='max-w-screen-xl mx-auto px-6 lg:px-8 mb-20'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-20'>
                    <div className='md:w-1/2'>
                        <h3 className='text-3xl font-bold tracking-tight text-secondary sm:text-4xl'>Suscríbete a nuestro boletín</h3>
                        <p className='mt-4 text-lg leading-8'>Recibe las últimas noticias y actualizaciones directamente en tu bandeja de entrada.</p>
                    </div>
                    <div className='sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4'>
                        <label htmlFor="email-adress" className='sr-only'>Correo Electrónico</label>
                        <input className="flex-auto rounded-md border-0 bg-white px-3.5 py-4 text-white shadow-sm:text-sm sm:leading-6 focus:outline-btnColor " 
                        type="email" 
                        id="email-adress"
                        name="email" 
                        required
                        autoComplete='email'
                        placeholder="Correo electrónico" />
                        <button className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white 
                    transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] 
                    focus:outline-none rounded-lg'> 
                            ¡Suscríbete!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription