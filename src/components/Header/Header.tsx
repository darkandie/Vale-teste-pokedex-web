import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box bg="red.500" p={4} color={"white"}>
      <Center>
        <Link to="/">
          <HStack flexDirection={"row"}>
            <Icon icon="mdi:pokeball" hFlip={true} fontSize={30}/>
            <Text fontSize={"3xl"} mr={10}>Pokedex</Text>
          </HStack>
        </Link>  
      </Center>
    </Box>
  )
}

export default Header;