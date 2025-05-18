'use client';
import React, { FC, useState } from 'react';
import Button from '@uikit/Button/Button';
import './AlbumSection.scss';
import SectionTitle from '@uikit/SectionTitle/SectionTitle';
import CustomImage from '@uikit/Image/Image';
import { STORAGE_URL } from '@utils/index';
import EmbeddedModal from '@components/Common/FrameEmbeddedModal/EmbeddedModal';

interface IAlbumSection {
  latestAlbum: any;
}

const AlbumSection: FC<IAlbumSection> = ({ latestAlbum }) => {
  const [openLyricsIndexes, setOpenLyricsIndexes] = useState<number[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoLink, setCurrentVideoLink] = useState('');

  const toggleLyrics = (index: number) => {
    setOpenLyricsIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const openVideoModal = (videoLink: string) => {
    setCurrentVideoLink(videoLink);
    setModalOpen(true);
  };

  const closeVideoModal = () => {
    setCurrentVideoLink('');
    setModalOpen(false);
  };

  if (!latestAlbum || (Array.isArray(latestAlbum) && !latestAlbum.length))
    return null;

  const albumInfo = {
    Title: latestAlbum.latestAlbumTitle,
    Label: latestAlbum.albumLabel,
    Released: latestAlbum.albumReleased,
    Genre: latestAlbum.albumGenre,
    Styles: latestAlbum.albumStyles,
  };

  const socialLinks = [
    { icon: 'socicon-amazon', link: latestAlbum.amazonLink },
    { icon: 'socicon-apple', link: latestAlbum.appleLink },
    { icon: 'socicon-spotify', link: latestAlbum.spotifyLink },
    { icon: 'socicon-youtube', link: latestAlbum.youtubeLink },
  ];

  const tracks = latestAlbum?.songs?.map((song: any) => ({
    title: song.songTitle,
    album: latestAlbum.latestAlbumTitle,
    songLink: song.songLink,
    lyrics: song.songLyrics,
  }));

  return (
    <>
      <section id="album" className="latest main">
        <SectionTitle title="Latest album" />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 text-center">
              <ul className="block-album-info">
                {Object.entries(albumInfo).map(([key, value]) => (
                  <li key={key}>
                    <h5 className="uppercase list-inline-item">{key}</h5>{' '}
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
              <ul className="block-social list-inline mt-4">
                {socialLinks.map(
                  (social, index) =>
                    social.link && (
                      <li key={index} className="list-inline-item mr-0">
                        <a href={social.link} target="_blank" rel="noreferrer">
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="block-tracklist">
                <div className="block-content pb-0 text-center">
                  <CustomImage
                    className="mb-0 album-image"
                    src={`${STORAGE_URL}${latestAlbum.albumImage}`}
                    alt="Album Cover"
                  />
                </div>
                <ol className="playlist">
                  {tracks.map((track: any, index: number) => (
                    <li key={index}>
                      <div className="as-link">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <h6 className="mb-0 opc-70 uppercase">
                              {track.title}
                            </h6>
                            <span>{track.album}</span>
                          </div>
                          <div className="col-md-6 text-md-right album-actions-block d-flex gap-2">
                            {track.songLink && (
                              <Button
                                bordered
                                onClick={() => openVideoModal(track.songLink)}
                              >
                                <i className="icon-play"></i> Play
                              </Button>
                            )}
                            {track.lyrics && (
                              <Button
                                bordered
                                onClick={() => toggleLyrics(index)}
                              >
                                <i className="icon-note"></i> Lyrics
                              </Button>
                            )}
                          </div>

                          {track.lyrics &&
                            openLyricsIndexes.includes(index) && (
                              <div className="col-12 text-center mt-3">
                                <h5 className="mb-4 opc-70 uppercase">
                                  {track.title}
                                </h5>
                                <p>{track.lyrics}</p>
                              </div>
                            )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {modalOpen && (
          <EmbeddedModal
            closeModal={closeVideoModal}
            videoLink={currentVideoLink}
          />
        )}
      </section>
    </>
  );
};

export default AlbumSection;
