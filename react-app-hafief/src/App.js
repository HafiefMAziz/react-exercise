import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <MainContent/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
