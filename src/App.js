import Sidebar from "./Sidebar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Sidebar />
      </div>
    </ChakraProvider>
  );
}

export default App;
