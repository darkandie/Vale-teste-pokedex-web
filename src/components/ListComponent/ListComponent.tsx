import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, Box, InputLeftElement, Input, AbsoluteCenter, SimpleGrid, Center } from "@chakra-ui/react";
import ListPokemon from "../../types/ListPokemon";
import { PokemonCard } from "../PokemonCard";

function ListComponent({ results }: ListPokemon) {
  return (
    <>
      <Box position={"relative"} bg="red.500" p={8} color={"white"} justifyContent={"center"}>
        <AbsoluteCenter>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <Search2Icon color='red.500'/>
            </InputLeftElement>
            <Input color={"black"} type="text" width={"auto"} bg={"white"}/>
          </InputGroup>
        </AbsoluteCenter>
      </Box>
      <Center>
        <Box maxW={1400} marginTop={10} marginBottom={10}>
          <SimpleGrid  columns={5} gap={6}>
            {results?.map((item) => (<PokemonCard key={item.name} {...item}/>))}
          </SimpleGrid>  
        </Box>
      </Center>
    </>
  )
}

export default ListComponent;