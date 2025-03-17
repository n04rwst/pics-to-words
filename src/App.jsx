import "./styles/App.css"
import GamePage from "./components/GamePage.jsx";
import InitialPage from "./components/InitialPage.jsx";
import {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const [language, setLanguage] = useState("");

    useEffect(() => {
        const currentLanguage = localStorage.getItem("language");
        if (!language) setLanguage(currentLanguage);
    }, [language]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<InitialPage onLanguageChange={setLanguage} />} />
                <Route path="/game" element={<GamePage language={language} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
