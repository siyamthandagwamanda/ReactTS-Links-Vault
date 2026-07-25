import "./Modal.css";

interface ModalProps{
    chidren: React.ReactNode;
    close: () => void;
}

function Modal({ chidren, close } : ModalProps){
    return(
        <div className="overlay">
            <div className="modal">
                <button className="close-button" onClick={close}>
                     ×
                </button>
                {chidren}
            </div>
        </div>
    );
}
export default Modal;