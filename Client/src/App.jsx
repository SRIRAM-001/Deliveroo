import Addtocart from "./Components/Addtocart/Addtocart"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import ProductDetail from "./Components/ProductDetail/ProductDetail"

const App = () => {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    // <Addtocart/>
    <Router>
      <Routes>
        <Route path="/addtocart/:prodid" element={<Addtocart/>}/>
        <Route path="/product/:prodid" element={<ProductDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App