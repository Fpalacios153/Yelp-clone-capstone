import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateReview from './CreateReview';
import './index.css'

function CreateReviewModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='write-a-review-button' onClick={() => setShowModal(true)}>
                <i className="fa fa-star-o fa-lg" aria-hidden="true"></i> {"    "}
                <span style={{ paddingLeft: '10px' }}>
                    Write a review
                </span>
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateReview setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateReviewModal;
