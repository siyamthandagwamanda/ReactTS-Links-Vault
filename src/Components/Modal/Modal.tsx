import "./Modal.css";

interface ModalProps{
    onclose: () => void;
    children: React.ReactNode;
}

function Modal({ onclose, children  } : ModalProps){
    return(
        <div className="overlay">
            <div className="modal">
                <button className="close-button" onClick={onclose}>
                     ×
                </button>
                {children}
            </div>
        </div>
    );
}
export default Modal;