import "./App.css";
import Banner from "./components/banner";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <DaisyNav />
      <Banner/>
    </>
  );
}

export default App;
