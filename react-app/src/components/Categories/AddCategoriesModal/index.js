import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import AddCategories from './AddCategories';

function AddCategoriesModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className='business-detail-UD-button' onClick={() => setShowModal(true)}>
                Add Categories
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddCategories setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default AddCategoriesModal;
