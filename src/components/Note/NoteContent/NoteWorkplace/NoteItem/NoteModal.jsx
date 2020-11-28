import { calculateColor } from '../../../../../utils/calculateColor';
import './NoteModal.css';

let NoteModal = ({active, setActive, note}) => {
    return (
        <div
            className={active === true ? "note-modal active" : "note-modal"}
            onClick={() => setActive(false)}
            >
            <div
                className={active === true ? "note-modal__content active" : "note-modal__content"}
                style={calculateColor(note.color)}
                onClick={e => e.stopPropagation()}
                >
                <div className="note-modal__content__title">
                    <p>{note.title}</p>
                </div>

                <div className="note-modal__content__text">
                    <p>{note.text}</p>
                </div>
                
                <div className="note-modal__content__menu">
                
                </div>
            </div>
        </div>
    )
}

export default NoteModal