import "./App.css";
import Background from "./components/Background";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
    return (
        <div className="app">
            <Header />
            <Background />
            <Home />

            {/* <Footer /> */}
        </div>
    );
}

export default App;
