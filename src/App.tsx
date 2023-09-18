import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import router from "./pages/Router";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  )
}

export default App;
