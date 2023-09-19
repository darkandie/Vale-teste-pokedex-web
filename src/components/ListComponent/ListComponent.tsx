import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, Box, InputLeftElement, Input, AbsoluteCenter, SimpleGrid, Center } from "@chakra-ui/react";
import ListPokemon from "../../types/ListPokemon";
import { PokemonCard } from "../PokemonCard";
import { useEffect, useState } from "react";

function ListComponent({ results }: ListPokemon) {

  const [pokemonsList, setPokemonsList] = useState<Array<{name: string; url: string;}> | []>([]);
  const [ searchPokemon, setSearchPokemon ] = useState<string>('');

  useEffect(() => {
    const filtereData = 
    results?.filter((item) => item.name.toLowerCase().includes(searchPokemon.toLowerCase())||  
      item.url.toLowerCase().includes(searchPokemon.toLowerCase()));
    setPokemonsList(filtereData);
  }, [searchPokemon, results]);

  return (
    <>
      <Box position={"relative"} bg="red.500" p={8} color={"white"} justifyContent={"center"}>
        <AbsoluteCenter>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <Search2Icon color='red.500'/>
            </InputLeftElement>
            <Input 
              color={"black"} 
              type="text" 
              width={"auto"} 
              bg={"white"}
              placeholder="Search"
              onChange={(text) => setSearchPokemon(text.target.value)}
            />
          </InputGroup>
        </AbsoluteCenter>
      </Box>
      <Center>
        <Box maxW={1400} marginTop={10} marginBottom={10}>
          <SimpleGrid  columns={5} gap={6}>
            {pokemonsList?.map((item) => (<PokemonCard key={item.name} {...item}/>))}
          </SimpleGrid>  
        </Box>
      </Center>
    </>
  )
}

export default ListComponent;