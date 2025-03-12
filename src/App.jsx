import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Tech from "./Components/Tech";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#201f1f] min-h-screen w-full ">
      <Header/>
      <Hero/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;