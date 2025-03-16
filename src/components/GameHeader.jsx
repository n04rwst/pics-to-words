import "../styles/GameHeader.css"
import Progress from "./Progress.jsx";
import Hearts from "./Hearts.jsx";

function GameHeader({guessedWords, maxWords, lives, errorsCount}) {
    return (
        <div className="game-header">
            <Progress guessedWords={guessedWords} maxWords={maxWords} />
            <Hearts count={lives} errorsCount={errorsCount} />
        </div>
    );
}

export default GameHeader;