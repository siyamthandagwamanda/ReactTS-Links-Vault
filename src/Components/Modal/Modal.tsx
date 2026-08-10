import "./Modal.css";

interface ModalProps{
    onClose: () => void;
    children: React.ReactNode;
}

function Modal({ onClose, children  } : ModalProps){
    return(
        <div className="overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                     ×
                </button>
                {children}
            </div>
        </div>
    );
}
export default Modal;