import { useState } from 'react';

export const OpenModalForm = (id) => {

const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {isModalOpen, openModal, closeModal}
}
export default OpenModalForm
