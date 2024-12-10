// import ContactForm from "./components/contact";
import Hero from "./components/hero";
import Review from "./components/review";
import TopSelling from "./components/top-selling";

//main code
export default function Home() {
  return (
    <div>
      <Hero/>
      <TopSelling/>    
      <Review/>
      {/* <ContactForm/> */}
    </div>
  );
}
