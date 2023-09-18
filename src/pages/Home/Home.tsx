import { Header } from "../../components/Header";
import { ListComponent } from "../../components/ListComponent";
import { useGetAllPokemonsQuery } from "../../store/services/PokemonApi";

function Home() {
  const { data } = useGetAllPokemonsQuery();

  return (
    <>
      <Header />
      <ListComponent results={data?.results}/>
    </>  
  )
}

export default Home;