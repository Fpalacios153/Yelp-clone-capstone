import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import UpdateBusiness from './EditBusiness';
function UpdateBusinessModal({ }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='business-detail-UD-button' onClick={() => setShowModal(true)}>
                {/* <i className="fa fa-pencil" aria-hidden="true"></i>{'  '} */}
                Update Business
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
