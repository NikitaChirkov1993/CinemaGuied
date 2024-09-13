import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutFilm from "./pages/AboutFilm/AboutFilm";
import Genere from "./pages/Genere/Genere";
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/genere" element={<Genere/>} />
                    <Route path="/aboutFilm" element={<AboutFilm/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
