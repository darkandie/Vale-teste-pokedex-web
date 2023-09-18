import { Box, Card, CardBody, Center, Image, Text } from "@chakra-ui/react";
import { useGetPokemonByNameQuery } from "../../store/services/PokemonApi";
import background from '../../assets/background.png';

function PokemonCard({ name }: {name: string}) {
  const { data, isLoading } = useGetPokemonByNameQuery(name);

  if(isLoading) return <h1>...carregando</h1>;

  return (
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
  )
}

export default PokemonCard;