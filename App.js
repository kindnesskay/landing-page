import "./page.css";
import { Topbar,Ratings,Texthead,TextPara,ImageBox,TryButton, Footer } from "./Components";
import Logo from "./assets/Logo.svg";
import hero from "./assets/Hero Image.png";
// import sportify from './assets/'
import alternativeToLogo from "./assets/AlternativeTo Logo.svg";
import capterraLogo from "./assets/Capterra Logo.svg";

import NetflixLogo from "./assets/Netflix Logo.svg";
import ShopifyLogo from "./assets/Shopify Logo.svg";
import SpotifyLogo from "./assets/Spotify Logo.svg";
import WalmartLogo from "./assets/Walmart Logo.svg";

const items = ["Product", "challenges", "Resources", "Other Links"];
const reviews = [
  { name: "capterra Logo", source: capterraLogo },
  { name: "AlternativeTo Logo", source: alternativeToLogo },
];

const companies = [
  { name: "Netflix", source: NetflixLogo },
  { name: "shopify", source: ShopifyLogo },
  { name: "sportify", source: SpotifyLogo },
  { name: "walmart", source: WalmartLogo },
];
function App() {
  return (
    <div className="container">
      <Topbar menu_class={'menu'} contents={items}/>
      <div className="top_contents">
        <div className="contents">
        <Texthead />
        <TextPara/>
        <TryButton/>
        <Ratings reviews={reviews} class={'review_image_box'}/>
        </div>
        <ImageBox class={'right'} source={hero}/>
      </div>
      
      <Footer
        trustedCompanies={companies}
        trustText={"Trusted by 3+ million people at companies like:"}
      />
    </div>
  );
}

export default App;
