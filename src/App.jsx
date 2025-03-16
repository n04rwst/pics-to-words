import "./styles/App.css"
import "./styles/Modal.css"
import { useGame } from "./hooks/useGame.js";
import Grid from "./components/Grid.jsx";
import Modal from "./components/Modal.jsx";
import GameHeader from "./components/GameHeader.jsx";

function App() {
    const {
        data,
        finishedItems,
        lives,
        errorsCount,
        isGameOver,
        checkItems,
        handleReset
    } = useGame();

    return (
        <>
            <GameHeader
                guessedWords={finishedItems.length}
                maxWords={data.length}
                lives={lives}
                errorsCount={errorsCount}
            />
            <Grid
                words={data}
                finishedItems={finishedItems}
                checkItems={checkItems}
            />
            {isGameOver && <Modal
                result={finishedItems.length === data.length ? 'Победа' : 'Поражение'}
                wordsCount={finishedItems.length / 2}
                handleReset={handleReset} />}
        </>
    );
}

export default App;
