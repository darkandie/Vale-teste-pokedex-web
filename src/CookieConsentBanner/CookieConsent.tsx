import { Box, Button, Text, Center, VStack, HStack, keyframes } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

const animation = keyframes `
    from {
      height: 0%;
    } to {
      height: 15%;
    }
  `;

function CookieConsent() {
  const [, setCookie] = useCookies(["cookieConsent"]);

  const setCookiesConsent = (value: string) => {
    setCookie("cookieConsent", value, { path: "/" });
  }

  const myAnimation = `${animation} ease-in 2.5s`;

  return (
    <Box animation={myAnimation} position={"fixed"} bottom={0} backgroundColor={"white"} width={"full"}>
      <Center>
        <Box maxW={1100} width={"full"}>
          <VStack paddingBottom={5} spacing={8}>
            <Text paddingTop={4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, iusto eius vel magnam iure consequatur aut nemo nam illum facere, aspernatur nihil beatae, voluptatem voluptatibus nobis praesentium repellendus id inventore?</Text>
            <HStack justifyContent={"space-between"} width={"full"} spacing={6}>
              <Box>
                <Text>Ler politica de privacidade</Text>
                <Button backgroundColor={"gray.500"} color={"white"} margin={3}>Detalhes</Button>
              </Box> 
              <Box>
                <Button backgroundColor={"gray.500"} color={"white"} onClick={() => setCookiesConsent("refused")} margin={3}>Rejeitar e continuar</Button>
                <Button backgroundColor={"gray.500"} color={"white"} onClick={() => setCookiesConsent("accepted")} margin={3}>Aceitar e continuar</Button>
              </Box>   
            </HStack>
          </VStack>
        </Box>
      </Center>  
    </Box>
  )
}

export default CookieConsent;