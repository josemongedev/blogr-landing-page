import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* General navigation(site links) and authentication */}
      <Navbar />
      {/* Main CTA and hero banner */}
      <Hero />
      {/* 3 sections */}
      <Features />
      {/* Navigations links */}
      <Footer />
    </>
  );
}

export default App;
