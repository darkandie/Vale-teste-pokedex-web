import { Center, Box, HStack, Image, Text, VStack, AbsoluteCenter } from "@chakra-ui/react";
import Pokemon from "../../types/Pokemon";
import { Icon } from '@iconify/react';

interface PokemonDetailsContainerProps {
  details?: Pokemon;
}

function PokemonDetailsContainer({ details }: PokemonDetailsContainerProps) {
  return (
    <Center height={"full"} mt={40}>
      <HStack>
        <Box 
          backgroundColor={"blue.300"} 
          borderRadius={16}
          boxShadow={"2xl"}
          position={"relative"} 
          height={"3xl"} 
          minW={700} 
          w={"full"} 
          >
          <Center height={"full"}>
            <VStack spacing={3}>
              <Box position={"absolute"} top={30} right={30}>
                <Text fontSize={"3xl"} color={"white"} fontWeight={"bold"}>{details?.id}</Text>
              </Box>
              <AbsoluteCenter zIndex={1}>
                <Icon icon="mdi:pokeball" hFlip={true} fontSize={800} color="#90CDF4"/>
              </AbsoluteCenter>
              <Image 
                src={details?.sprites.other["official-artwork"].front_default}
                alt={details?.name}
                zIndex={2}
              />
              <HStack spacing={12} zIndex={2}>
                <Box backgroundColor={"red.100"} borderRadius={16}>
                  <Text 
                    color={"white"}
                    paddingBottom={1}
                    paddingX={10}
                    fontSize={20} 
                    fontWeight={"bold"}
                  >{details?.types[0].type.name}</Text>
                </Box>
                {details?.types[1]?.type.name && <Box backgroundColor={"red.100"} borderRadius={16}>
                  <Text 
                    color={"white"}
                    paddingBottom={1}
                    paddingX={10}
                    fontSize={20} 
                    fontWeight={"bold"}
                  >{details?.types[1]?.type.name}</Text>
                </Box>}
              </HStack>  
            </VStack>
          </Center>  
        </Box> 
        <Box height={"3xl"} minW={700} w={"full"} borderWidth={1} borderColor={"red"}>
          <Center height={"full"}>
            <Box>PokemonDetailsContainer</Box>
          </Center>  
        </Box> 
      </HStack>
    </Center>
  )
}

export default PokemonDetailsContainer;