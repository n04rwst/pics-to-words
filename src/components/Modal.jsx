import "../styles/Modal.css"
import { getDeclension } from "/src/utils/getDeclension.js";
import { useNavigate } from "react-router-dom";

function Modal({result, wordsCount, handleReset}) {
    const titleClassName = `modal-title ${
        result === 'Победа' ? 'win' : 'lose'}`;

    const wordsDeclension = getDeclension({ count: wordsCount, one: "слово", few: "слова", many: "слов" });
    const navigate = useNavigate();

    const handleMainPage = () => {
        handleReset();
        navigate("/");
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className={titleClassName}>{result}</h2>
                <p className="modal-description">Вы нашли {wordsDeclension}</p>
                <div className="buttons-container">
                    <button onClick={handleMainPage} className="button" type="button">На главную</button>
                    <button onClick={handleReset} className="button" type="button">Новая игра</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;