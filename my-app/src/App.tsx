import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutFilm from "./pages/AboutFilm/AboutFilm";
import Account from "./pages/Account/Account";
import Genere from "./pages/Genere/Genere";
import GenereLocal from "./pages/GenereLocal/GenereLocal";
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/aboutFilm" element={<AboutFilm/>} /> */}
                    <Route path="/aboutFilm/:id" element={<AboutFilm/>} />
                    <Route path="/genere" element={<Genere/>} />
                    <Route path="/genere/:genere" element={<GenereLocal/>} />
                    <Route path="/account" element={<Account/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
