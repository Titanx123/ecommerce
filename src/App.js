import Product from "./components/products";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Product/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
