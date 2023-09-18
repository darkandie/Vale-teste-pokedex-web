import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../store/services/PokemonApi";
import { Header } from "../../components/Header";
import { PokemonDetailsContainer } from "../../components/PokemonDetailsContainer";

function Details() {
  const { name } = useParams();

  const { data, isLoading} = useGetPokemonByNameQuery(name);

  if(isLoading) return <h1>... Carregando</h1>

  return (
    <>
      <Header />
      <PokemonDetailsContainer details={data}/>
    </>  
  )
}

export default Details;