import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import UpdateBusiness from './EditBusiness';
function UpdateBusinessModal({ }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit-model' onClick={() => setShowModal(true)}>
                <i class="fa fa-pencil" aria-hidden="true"></i>{'  '}
                Update Buisness
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateBusiness setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default UpdateBusinessModal;
