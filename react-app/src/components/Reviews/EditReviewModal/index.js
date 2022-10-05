import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import UpdateReview from './EditReview';

function UpdateReviewModal({ reviewId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='review-button' onClick={() => setShowModal(true)}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>

            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateReview setShowModal={setShowModal} reviewId={reviewId} />
                </Modal>
            )}
        </>
    );
}

export default UpdateReviewModal;
