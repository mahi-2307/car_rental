import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Plan from "./pages/Plan/Plan";
import Book from "./pages/book/Book";
import Carfleet from "./pages/carfleet/Carfleet";
import Download from "./pages/download/Download";
import Intro from "./pages/intro/Intro";
import Review from "./pages/review/Review";
import Why from "./pages/why/Why";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Book/>
      <Plan/>
      <Carfleet/>
      <Why/>
      <Review/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
