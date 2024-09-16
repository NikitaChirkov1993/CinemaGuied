import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutFilm from "./pages/AboutFilm/AboutFilm";
import Genere from "./pages/Genere/Genere";
import GenereLocal from "./pages/GenereLocal/GenereLocal";
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutFilm" element={<AboutFilm/>} />
                    <Route path="/genere" element={<Genere/>} />
                    <Route path="/genere/:genere" element={<GenereLocal/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
