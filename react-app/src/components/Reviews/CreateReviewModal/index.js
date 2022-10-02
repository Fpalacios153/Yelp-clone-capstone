import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateReview from './CreateReview';

function CreateReviewModal({ }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit-model' onClick={() => setShowModal(true)} style={{ background: 'rgba(224,7,7,1)', color: 'white', padding: '10px', borderRadius: '5px', border: '0' }}>
                <i className="fa fa-star-o" aria-hidden="true"></i> {"  "}
                Write a Review
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
