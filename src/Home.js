import React from "react";
import "./Home.css";
import cover from "./assets/cover.jpg";
import Product from "./Product"
import laptop from "./assets/laptop.png";
import bag from "./assets/bag.png"
import waredrobe from "./assets/waredrobe.png"
import sunglasses from "./assets/sungalsses.png"
import hairproduct from "./assets/hairproduct.png"
import tshirt from "./assets/tshirt.png"



function Home() {
  return (
    <div>
      <div className="Home">
        <div className="home_container">
          <img src={cover} alt="" className="home_image" />
          <div className="home_row">
            <Product
              id="1"
              title=" Stay productive and connected with our range of 
              powerful laptops. Sleek, reliable, and packed with features,
               our laptops  are designed to meet your computing needs."
              price={750}
              rating={5}
              image={laptop}
             />
          </div>
          <div className="home_row">
          <Product
              id="2"
              title="Carry your essentials in style with our high-quality bags. 
              Whether you need a backpack for adventures or 
              a chic tote for work, we have the perfect bag for you."
              price={20}
              rating={3}
              image={bag}
             />
            <Product 
             id="3"
             title=" Achieve the perfect hairstyle with our premium hair products.
              From hair serums to styling gels,
              we have everything you need for healthy and stylish locks."
             price={56}
             rating={4}
             image={hairproduct}/>
            <Product 
             id="4"
             title=" Elevate your style with our comfortable and trendy t-shirts. Available in various colors and sizes, these
             shirts are perfect for casual outings or lounging at home."
             price={15}
             rating={2}
             image={tshirt} />
          </div>
          <div className="home_row">
          <Product
              id="5"
              title=" Organize your clothes with our spacious and elegant
               wardrobes. Our collection includes modern and traditional 
               designs to suit any bedroom decor."
              price={210}
              rating={3}
              image={waredrobe}
             />
            <Product 
            id="6"
              title=" Protect your eyes from the sun in style with our
               fashionable sunglasses. Choose from a wide range of designs
               , from classic aviators to chic oversized frames."
              price={25}
              rating={3}
              image={sunglasses} />
          </div>
        </div>
      </div>
      <div className="footer_container">
        <p>right preserved by yasmina askri </p>
      </div>
    </div>
  );
}
export default Home;
