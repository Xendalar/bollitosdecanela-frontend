import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";


const Search = () => {
  const navigate = useNavigate();
  const searchText = useParams();
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get('query');
    if (queryParam) {
      setQuery(queryParam);
      setInputValue(queryParam);
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      if (!query) return;

      setLoading(true);
      try {
        const response = await axios.get(`https://bollitosdecanela.vercel.app/api/items`, {
          params: { q: query }
        });
        setResults(response.data);
      } catch (error) {
        setError(error.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, [query]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
    navigate(`/search?query=${inputValue}`);
  };

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">Search</h1>
      <form onSubmit={handleSubmit} className="bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center">
        <AiOutlineSearch className="w-7 h-7 mr-2 text-neutral-300" />
        <input
          className="outline-none w-full placeholder:text-[#7b8285]"
          name="query"
          type="search"
          placeholder="Encuentra la receta ideal"
          id="search"
          required=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>

      <div className="mt-6">
        {loading && <p className="text-center">Cargando resultados...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {!loading && !error && results?.length === 0 && query && <p className="text-center">No se encontraron resultados para "{query}"</p>}

        <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {results && results.map((item) => (
            <Card key={item._id} item={item}>
              {item.nombre}
            </Card>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Search
