import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import UpdateReview from './EditReview';

function UpdateReviewModal({ }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>
                Edit
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateReview setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default UpdateReviewModal;
