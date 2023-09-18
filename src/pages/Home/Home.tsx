import { Header } from "../../components/Header";
import { ListComponent } from "../../components/ListComponent";
import { useGetAllPokemonsQuery } from "../../store/services/PokemonApi";

function Home() {
  const { data } = useGetAllPokemonsQuery();

  console.log(data, "data");

  return (
    <>
      <Header />
      <ListComponent />
    </>  
  )
}

export default Home;