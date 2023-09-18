import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, Box, InputLeftElement, Input, AbsoluteCenter } from "@chakra-ui/react";

function ListComponent() {
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
      <Box position={"relative"}>
        <AbsoluteCenter>
          
        </AbsoluteCenter>
      </Box>
    </>
  )
}

export default ListComponent;