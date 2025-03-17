import "../styles/InitialPage.css"
import { useNavigate } from "react-router-dom";

function InitialPage({onLanguageChange}) {
    const navigate = useNavigate();

    const handleSelect = (language) => {
        onLanguageChange(language);
        localStorage.setItem("language", language);
        navigate("/game");
    }

    return (
        <section className="welcome">
            <img src="/public/icons/pics-to-words.svg" alt="Logo"/>
            <h2 className="welcome-title">Добро пожаловать!</h2>
            <h3 className="rules-title">Правила игры</h3>
            <ul className="rules-list">
                <li>Игра предназначена для разучивания слов иностранного языка.</li>
                <li>В наборе есть пары карточек – со словом и рисунком.</li>
                <li>Нужно выбрать карточку с рисунком и подходящую ей со словом.</li>
                <li>Если карточки совпали — они исчезают и становятся недоступными для выбора.</li>
            </ul>
            <div className="buttons-container">
                <button onClick={() => handleSelect("finnish")} className="lang-button fin-button" type="button">aloittaa</button>
                <button onClick={() => handleSelect("german")} className="lang-button ger-button" type="button">beginnen</button>
                <button onClick={() => handleSelect("italian")} className="lang-button ita-button" type="button">iniziare</button>
            </div>
        </section>
    );
}

export default InitialPage;