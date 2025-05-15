import React, { memo, useRef, useEffect } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

interface ImageZoomInOutProps {
  imageUrl: string;
}

const ImageZoomInOut: React.FC<ImageZoomInOutProps> = ({ imageUrl }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  // Log image dimensions
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onload = () => {};
    }
  }, [imageUrl]);

  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.1}
      maxScale={5}
      centerOnInit={true}
      centerZoomedOut={true}
      limitToBounds={true}
      velocityAnimation={{
        // enabled: true,
        sensitivity: 0.95,
        animationTime: 400,
        animationType: 'easeOut',
      }}
      panning={{ velocityDisabled: false }}
      wheel={{ step: 0.4 }}
      doubleClick={{ mode: 'toggle', step: 2 }}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          <div
            className="PanAndZoomImage-container"
            style={{
              backgroundColor: 'transparent',
              borderRadius: '10px',
              position: 'relative',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'visible',
            }}
          >
            <div
              className="btn-container"
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                zIndex: 10,
              }}
            >
              {/* <button
                className="primary-button"
                onClick={() => zoomIn(0.2, 200)}
                style={buttonStyle}
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                className="primary-button"
                onClick={() => zoomOut(0.2, 200)}
                style={buttonStyle}
                aria-label="Zoom out"
              >
                -
              </button>
              <button
                className="primary-button"
                onClick={() => resetTransform(200)}
                style={buttonStyle}
                aria-label="Reset transform"
              >
                ↺
              </button> */}
            </div>

            <div
              className="zoomable-img-wrapper"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TransformComponent
                wrapperStyle={{ width: '100%', height: '100%' }}
              >
                <img
                  ref={imgRef}
                  src={imageUrl}
                  className="PanAndZoomImage-image"
                  alt="zoomable image"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    transition: 'transform 0.2s ease-out',
                    cursor: 'move',
                  }}
                />
              </TransformComponent>
            </div>
          </div>
        </>
      )}
    </TransformWrapper>
  );
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  fontSize: '18px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.3s, transform 0.2s',
};

export default memo(ImageZoomInOut);
