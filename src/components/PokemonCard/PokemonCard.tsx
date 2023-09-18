import { Box, Card, CardBody, Center, Image, Text } from "@chakra-ui/react";
import { useGetPokemonByNameQuery } from "../../store/services/PokemonApi";
import background from '../../assets/background.png';
import { Link } from "react-router-dom";

function PokemonCard({ name }: {name: string}) {
  const { data, isLoading } = useGetPokemonByNameQuery(name);

  if(isLoading) return <h1>...carregando</h1>;

  return (
    <Link to={`details/${data?.name}`}>
      <Card 
        backgroundImage={`url(${background})`} 
        backgroundPosition="bottom" 
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        cursor={"pointer"} 
        shadow={"xl"} 
        _hover={{bg: "gray.100"}}
      >
        <Box>
          <CardBody>
            <Text textAlign={"right"}>{data?.id}</Text>
            <Box >
              <Center>
                <Image width={40} src={data?.sprites.other["official-artwork"].front_default} alt={data?.name} />
              </Center>
            </Box>
            <Center>
              <Text fontWeight={"bold"} fontSize={"xl"}>{data?.name}</Text>
            </Center>  
          </CardBody>
        </Box>
      </Card>
    </Link>
  )
}

export default PokemonCard;