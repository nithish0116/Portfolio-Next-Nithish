import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import TextChange from "./Components/Home/textChange";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Technologies/Technologies";

export default function Home() {
  return (
    <>
    <div className=" h-auto w-full overflow-hidden" >
    <Navbar/>
    <TextChange/>
    <About />
    <Technologies/>
    <Contact/>
    </div>
    </>
  );
}
