import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateNewBusiness from './CreateBusiness';
import './index.css'

function CreateBusinessModal({ homePage }) {
    const [showModal, setShowModal] = useState(false);
    // const [homePage, setHomePage] = useState(false)

    return (
        <>
            <button className={homePage ? 'create-business-button' : 'create-business-button-favs'} onClick={() => setShowModal(true)}>
                Create New Business
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateNewBusiness setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default CreateBusinessModal;
