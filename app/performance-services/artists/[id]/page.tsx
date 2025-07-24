'use client';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../src/store/store';
import './artistPage.scss';
import { useState } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

export default function ArtistPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const params = useParams();
  const artistId = params.id ? Number(params.id) : null;
  const artist = useSelector((state: RootState) =>
    state.portfolio.items.find((item) => item.id === artistId)
  );

  if (!artistId || !artist) {
    return <div style={{ padding: '50px' }}>404 Page Not Found</div>;
  }

  return (
    <div className="globWrapper">
      <div className="allInformation">
        <div className="posterBox">
          <Image src={artist.img} alt={artist.name} width={300} height={300} />
          <div className="bottomInfo">
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
          </div>
        </div>
        <div className="test">
          <div className="rightWrapper">
            <h3>Gallery</h3>
            <div className="gallery">
              {artist.gallery?.map((imgUrl, index) => (
                <div className="galleryItem" key={index}>
                  <Image
                    src={imgUrl}
                    alt={`Gallery ${index}`}
                    width={200}
                    height={200}
                    onClick={() => setModalImage(imgUrl)}
                  />
                </div>
              ))}
            </div>
            <div className="reviews">
              <h3>Reviews</h3>
              <div className="reviewItems">
                {artist.reviews?.length ? (
                  <Masonry
                    breakpointCols={{ default: 2, 900: 1 }}
                    className="masonry-grid"
                    columnClassName="masonry-column"
                  >
                    {artist.reviews.map((review, index) => (
                      <div className="reviewCard" key={index}>
                        <div className="reviewTitle">{review.title}</div>
                        <div className="reviewContent">{review.content}</div>
                      </div>
                    ))}
                  </Masonry>
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            </div>
          </div>
          <div className="videos">
            <h2>Videos</h2>
            <div className="videosContainer">
              {artist.videos?.map((videoUrl, index) => (
                <div className="videoItem" key={index}>
                  <iframe
                    src={videoUrl}
                    title={`Video ${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalImage && (
        <div className="modalOverlay" onClick={() => setModalImage(null)}>
          <Image
            src={modalImage}
            alt=""
            width={600}
            height={600}
            className="modalImage"
          />
        </div>
      )}
    </div>
  );
}
