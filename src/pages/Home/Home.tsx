import { CookieConsent } from "../../CookieConsentBanner";
import { Header } from "../../components/Header";
import { ListComponent } from "../../components/ListComponent";
import { useGetAllPokemonsQuery } from "../../store/services/PokemonApi";
import { useCookies } from "react-cookie";

function Home() {
  const { data } = useGetAllPokemonsQuery();
  const [cookie] = useCookies(["cookieConsent"]);

  return (
    <>
      <Header />
      <ListComponent results={data?.results}/>
      {cookie.cookieConsent !== "accepted" && cookie.cookieConsent !== "refused" && <CookieConsent />}
    </>  
  )
}

export default Home;