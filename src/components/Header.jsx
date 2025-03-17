import "../styles/Header.css"
import Progress from "./Progress.jsx";
import Hearts from "./Hearts.jsx";

function Header({guessedWords, maxWords, lives, errorsCount}) {
    return (
        <div className="game-header">
            <img src="/public/icons/pics-to-words.svg" alt="Logo"/>
            <Progress guessedWords={guessedWords} maxWords={maxWords} />
            <Hearts count={lives} errorsCount={errorsCount} />
        </div>
    );
}

export default Header;