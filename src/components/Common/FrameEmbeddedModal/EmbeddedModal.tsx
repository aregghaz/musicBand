'use client';
import Modal from '@uikit/Modal/Modal';
import { FC } from 'react';
import './FrameEmbeddedModal.scss';

interface IEmbeddedModal {
  closeModal: () => void;
  videoLink: string;
}

const EmbeddedModal: FC<IEmbeddedModal> = ({ closeModal, videoLink }) => {
  const getEmbedLink = (link: string) => {
    try {
      const url = new URL(link);
      const videoId = url.searchParams.get('v');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  const embedLink = getEmbedLink(videoLink);

  return (
    <Modal closeModal={closeModal} className="embedded-modal">
      <div
        style={{
          // position: 'relative',
          // paddingBottom: '56.25%',
          // height: 0,
          // overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}
      >
        {embedLink ? (
          <iframe
            src={embedLink}
            title="Embedded Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              //   position: 'absolute',
              //   top: 0,
              //   left: 0,
              width: '100%',
              height: '100%',
              //   border: 'none',
            }}
          ></iframe>
        ) : (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h5>Something went wrong.</h5>
            <p>Couldn’t load the video. Something went wrong.</p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default EmbeddedModal;
