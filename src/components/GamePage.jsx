import { useGame } from "../hooks/useGame.js";
import Header from "./Header.jsx";
import Grid from "./Grid.jsx";
import Modal from "./Modal.jsx";

function GamePage({ language }) {
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
            <Header
                guessedWords={finishedItems.length}
                maxWords={data.length}
                lives={lives}
                errorsCount={errorsCount}
            />
            <Grid
                language={language}
                words={data}
                finishedItems={finishedItems}
                checkItems={checkItems}
            />
            {isGameOver && <Modal
                result={finishedItems.length === data.length ? 'Победа' : 'Поражение'}
                wordsCount={finishedItems.length / 2}
                handleReset={handleReset}
            />}
        </>
    );
}

export default GamePage;