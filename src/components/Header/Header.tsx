import { Box, Center, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box bg="red.500" p={4} color={"white"}>
      <Center>
        <Text fontSize={"3xl"} mr={10}>Pokedex</Text>
      </Center>
    </Box>
  )
}

export default Header;