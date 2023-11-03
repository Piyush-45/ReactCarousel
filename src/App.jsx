
// import ReactSImplyCarousel from "./ReactSImplyCarousel";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import './App.css'
function App() {
  const slides = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
  ];


  return (
    <div className="hero-carousel">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img src={image1} alt="Product 1" />
        </div>
        <div>
          <img src={image2} alt="Product 2" />
        </div>
        <div>
          <img src={image3} alt="Product 3" />
        </div>
        <div>
          <img src={image4} alt="Product 3" />
        </div>
        {/* Add more image slides as needed */}
      </Carousel>
    </div>
  );
}

export default App;
