import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({ children, title, buttonText, showModal, displayModal, closeModal, cssClass}) => {
    if(cssClass==='contactForm' || cssClass==='classes'){
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
                <button onClick={displayModal} className={cssClass==='contactForm'?styles.openContactForm:styles.openOtherClassButton}>{buttonText}</button>
                <div className={`${showModal === true ? styles.modalBackground : styles.modalNotActive}`}/>
            </>
        )
    }
    if(cssClass==='Classes'){
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
                <button onClick={displayModal} className={styles.classesOpen}>{buttonText}</button>
                <div className={`${showModal === true ? styles.modalBackground : styles.modalNotActive}`}/>
            </>
        )
    }
    if(cssClass==='Enroll'){
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
                <button onClick={displayModal} className={styles.EnrollButton}>{buttonText}</button>
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
