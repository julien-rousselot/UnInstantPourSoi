import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <ul>
                <li><Link to="/prestation1">Prestation 1</Link></li>
                <li><Link to="/prestation2">Prestation 2</Link></li>
                <li><Link to="/prestation3">Prestation 3</Link></li>
            </ul>
        </div>
    );
};

export default Modal;
