import one from "../assests/img/imag1.jfif"
import two from "../assests/img/image2.jfif"
import three from "../assests/img/image3.jfif"
// component 3
function  Product(){
    return(
      <div class="products">
    
      <div class="box">
   
          <img src={one} alt= "one"/>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
      </div>  
      <div class="box">
          <img src={two} alt="two"/>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
      </div>
      <div class="box">
          <img src={three} alt="three"/>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>
  
  
  </div>
    )
  }
  export default Product