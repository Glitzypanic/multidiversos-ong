import { useState } from "react";
import '../styles/Form.css'
import Alert from '../components/Alert';

export default function Form () {
    
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const handleOpenAlert = (e) => {
        e.preventDefault();
        setIsAlertOpen(true);

        setTimeout(handleCloseAlert, 3000);
    }

    const handleCloseAlert = () => {
        setIsAlertOpen(false);
    }


    return (
        <form className="form-container" onSubmit={handleOpenAlert}>
            <label className="form-title" htmlFor="name">Nombre</label>
            <input className="form-input" type="text" id="name" name="name"  placeholder="Escriba su nombre aqui"/>
    
            <label className="form-title" htmlFor="email">Correo</label>
            <input className="form-input" type="email" id="email" name="email"  placeholder="Escriba su correo aqui"/>
    
            <label className="form-title" htmlFor="message">Mensaje</label>
            <textarea className="form-input" name="message" id="message" cols="30" rows="10" placeholder="Escriba su mensaje aqui"></textarea>
    
            <button className="contact-button form-button" type="submit">Enviar</button>
            {isAlertOpen && <Alert message="Mensaje enviado"/>}
        </form>
    )
}


