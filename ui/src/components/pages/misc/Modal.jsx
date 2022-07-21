import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({ children, title, buttonText, showModal, displayModal, closeModal, cssClass}) => {
    if(cssClass==='contactForm'){
        return (
            <>
                <div className={`${showModal === true ? styles.contactFormModal : styles.modalNotActive}`}>
                    <div className={styles.modalHeader}>
                        <h2 className={styles.modalTitle}>{title}</h2>
                        <button onClick={closeModal} className={styles.closeButton}>X</button>
                    </div>
                    <div className={styles.modalBody}>
                        {children}
                    </div>
                </div>
                <button onClick={displayModal} className={styles.openContactForm}>{buttonText}</button>
                <div className={`${showModal === true ? styles.modalBackground : styles.modalNotActive}`}/>
            </>
        )
    }
    return (
        <>
            <div className={`${showModal === true ? styles.modal : styles.modalNotActive}`}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>{title}</h2>
                    <button onClick={closeModal} className={styles.closeButton}>X</button>
                </div>
                <div className={styles.modalBody}>
                    {children}
                </div>
            </div>
            <button onClick={displayModal} className={styles.openButton}>{buttonText}</button>
            <div className={`${showModal === true ? styles.modalBackground : styles.modalNotActive}`}/>
        </>
    )
}


export default Modal;
