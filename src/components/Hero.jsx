import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="px-5 xl:px-10 md:w-3/4 mb-10">
      <h1 className="mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">
        Un blog nacido del amor por la <span className="text-secondary">comida</span> y los <span className="text-secondary">animales</span>
      </h1>
      <form action="/search" className="bg-white p-4 rounded relative flex items-center">
      <AiOutlineSearch className="w-7 h-7 mr-2 text-neutral-300"/>
      <input className="outline-none w-full placeholder:text-[#7b8285]"name="query" type="search" placeholder="Encuentra la receta ideal" id="search"  required="" />
      </form>
    </div>
  )
}

export default Hero