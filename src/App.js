import Navbar from "./components/Navbar"
import Searchbar from "./components/searchbar"
import Product from "./components/Product"
import About from "./components/About"
import Footer from "./components/Footer"

function App(){
    return(
            <div>
              <Navbar></Navbar>
              <Searchbar></Searchbar>
              <Product></Product>
              <About></About>
              <Footer></Footer>
            </div>
    
    )
}

export default App