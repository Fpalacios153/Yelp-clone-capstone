import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateNewBusiness from './CreateBusiness';
import './index.css'

function CreateBusinessModal({ }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='create-business-button' onClick={() => setShowModal(true)}>
                Create New Business
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateNewBusiness setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateBusinessModal;
