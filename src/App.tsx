import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import router from "./pages/Router";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>  
    </ChakraProvider>
  )
}

export default App;
