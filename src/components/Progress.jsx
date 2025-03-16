import "../styles/Progress.css"

function Progress({guessedWords, maxWords}) {
    const width = `${guessedWords / maxWords * 100}%`;

    return (
        <div className="progress-wrapper">
            <div className="progress" style={{width: width}}></div>
        </div>
    );
}

export default Progress;