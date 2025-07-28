'use client';

import './teamItems.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Image from 'next/image';
import { TeamItem } from '../../../store/slices/teamItemSlice';
import { AppDispatch, RootState } from '../../../store/store';
import {
  closeModal,
  ModalState,
  openModal,
} from '../../../store/slices/modalSlice';
import UserPersonaMasonry from '@components/PerformanceServicesComponents/UserPersonaMasonry/UserPersonaMasonry';

type TeamItemsProps = {
  item: TeamItem;
};

export default function TeamItems({ item }: TeamItemsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, selectedItem } = useSelector<RootState, ModalState>(
    (state) => state.modal
  );

  const handleOpenModal = () => dispatch(openModal(item)); // Теперь item полностью совместим
  const handleCloseModal = () => dispatch(closeModal());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="teamItem" onClick={handleOpenModal}>
      <div className="itemImage">
        <Image src={item.imageUrl} alt={item.name} width={200} height={200} />
      </div>
      <div className="itemDescription">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
      <div className="itemStatus">
        <p className="author">{item.author}</p>
        <p className="date">{item.date}</p>
      </div>
      {isOpen && selectedItem?.id === item.id && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={handleCloseModal}>
              ×
            </button>
            <div className="modalWrapper">
              <div className="imageWrapper">
                <div className="imgContainer">
                  <Image
                    src={selectedItem.imageUrl}
                    alt={selectedItem.name}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="infoBottomContainer">
                  <div className="nameBox">
                    <p>{selectedItem.name}</p>
                  </div>
                  <div className="bottomInfo">
                    <p>{selectedItem.description}</p>
                  </div>
                  <div className="additionalInfo">
                    <p>Author: {selectedItem.author}</p>
                    <p>Date: {selectedItem.date}</p>
                    <p>Team: {selectedItem.teamId}</p>
                  </div>
                </div>
              </div>
              <div className="allInfoWrapper">
                <UserPersonaMasonry personaId={selectedItem.id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
