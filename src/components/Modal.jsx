function Modal({result, wordsCount, handleReset}) {
    const titleClassName = `modal-title ${
        result === 'Победа' ? 'win' : 'lose'}`;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className={titleClassName}>{result}</h2>
                <p className="modal-description">Вы нашли {wordsCount} слов</p>
                <button onClick={handleReset} className="button" type="button">Новая игра</button>
            </div>
        </div>
    );
}

export default Modal;