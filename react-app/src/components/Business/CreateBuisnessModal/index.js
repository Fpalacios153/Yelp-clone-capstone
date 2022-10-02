import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateNewBusiness from './CreateBusiness';

function CreateBusinessModal({ }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit-model' onClick={() => setShowModal(true)}>
                Create New Buisness
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
