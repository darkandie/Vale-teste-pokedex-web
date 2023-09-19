import { Center, Box, HStack, Image, Text, VStack, AbsoluteCenter } from "@chakra-ui/react";
import Pokemon from "../../types/Pokemon";
import { Icon } from '@iconify/react';
import { colorByType } from "../../util/getColorByType";

interface PokemonDetailsContainerProps {
  details?: Pokemon;
}

function PokemonDetailsContainer({ details }: PokemonDetailsContainerProps) {
  return (
    <Center height={"full"} mt={40}>
      <HStack spacing={0}>
        <Box 
          backgroundColor={colorByType[details?.types[0].type.name]} 
          borderTopLeftRadius={16}
          borderBottomLeftRadius={16}
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
                <Icon icon="mdi:pokeball" hFlip={true} fontSize={800} color={colorByType[`${details?.types[0].type.name}_light`]}/>
              </AbsoluteCenter>
              <Image 
                src={details?.sprites.other["official-artwork"].front_default}
                alt={details?.name}
                zIndex={2}
              />
              <HStack spacing={12} zIndex={2}>
                <Box backgroundColor={colorByType[`${details?.types[0].type.name}_desc`]} borderRadius={16}>
                  <Text 
                    color={"white"}
                    paddingBottom={1}
                    paddingX={10}
                    fontSize={20} 
                    fontWeight={"bold"}
                  >{details?.types[0].type.name}</Text>
                </Box>
                {details?.types[1]?.type.name && <Box backgroundColor={colorByType[`${details?.types[1].type.name}_desc`]} borderRadius={16}>
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
        <Box 
          boxShadow={"2xl"}
          height={"3xl"} 
          minW={700} 
          w={"full"} 
          borderTopRightRadius={16}
          borderBottomRightRadius={16}
          backgroundColor={colorByType[`${details?.types[0].type.name}_desc`]} 
        >
          <Center height={"full"}>
            <VStack>
            <Text color={"white"} fontSize={50} fontWeight={"bold"}>{details?.name}</Text>
              <Box>
                <Center>
                  <Text fontSize={30} color={"white"} fontWeight={"bold"}>About</Text>
                </Center>
                <Box 
                  backgroundColor={"white"}
                  paddingX={10}
                  paddingY={5}
                  borderRadius={16}
                  marginTop={5}
                >
                  <HStack spacing={12} >
                    <Box borderRightWidth={1} borderRightColor={"gray.500"} paddingRight={10}>
                      <Center>
                        <VStack>
                          <HStack>
                            <Icon icon="material-symbols:weight-outline" />
                            <Text>{details?.weight}</Text>
                          </HStack>
                          <Text>Weight</Text>
                        </VStack>
                      </Center>
                    </Box>
                    <Box>
                      <Center>
                        <VStack>
                          <HStack>
                            <Icon icon="material-symbols:height-rounded" />
                            <Text>{details?.height}</Text>
                          </HStack>
                          <Text>Height</Text>
                        </VStack>
                      </Center>
                    </Box>
                    <Box borderLeftWidth={1} borderLeftColor={"gray.500"} paddingLeft={10}>
                    <Center>
                        <VStack spacing={0}>
                          <Text fontSize={12}>{details?.moves[0].move.name}</Text>
                          <Text fontSize={12}>{details?.moves[1].move.name}</Text>
                          <Text fontSize={12}>Moves</Text>
                        </VStack>
                      </Center>
                    </Box>
                  </HStack>
                </Box>
              </Box>
              <Box>
                <VStack>
                  <Center>
                    <Text fontSize={30} color={"white"} fontWeight={"bold"}>Base Stats</Text>
                  </Center>
                    <Box backgroundColor={"white"} padding={5} borderRadius={16}>
                      <HStack>
                        <VStack>
                          {details?.stats.map((stat) => 
                            (<Text key={stat.stat.name}>{stat.stat.name.toUpperCase().substring(0, 7)}
                          </Text>))}
                        </VStack>
                        <VStack>
                          {details?.stats.map((stat) => {
                            return (
                            <HStack>
                              <Text key={stat.base_stat}>
                                {stat.base_stat}
                              </Text>
                              <Box height={2} width={"2xs"} backgroundColor={"green.500"} borderRadius={16}/>
                            </HStack>
                          )})}
                        </VStack>
                      </HStack>
                    </Box>
                </VStack>  
              </Box>
            </VStack>
          </Center>  
        </Box> 
      </HStack>
    </Center>
  )
}

export default PokemonDetailsContainer;