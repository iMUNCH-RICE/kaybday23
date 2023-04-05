import React, { useState, useRef, useEffect } from 'react';
import './QuoteDisplay.css';
import { BsSoundwave } from 'react-icons/bs';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { RiVideoLine } from 'react-icons/ri';

export default function QuoteDisplay(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMediaType, setCurrentMediaType] = useState(null);
  const modalRef = useRef();
  const audioRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (isModalOpen) {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
      }
      if (videoRef.current) {
        videoRef.current.volume = 0.5;
      }
    }
  }, [isModalOpen]);


  const openModal = (mediaType) => {
    setIsModalOpen(true);
    setCurrentMediaType(mediaType);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMediaType(null);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div className="quote" onClick={isModalOpen ? handleClickOutside : null}>
      <div
        className="icon-container"
      >
        {/* <BsSoundwave
          size="2rem"
          className={`icon-sound${!props.audio ? ' disabled' : ''}`}
          onClick={props.audio ? () => openModal('sound') : null}
        /> */}
        <HiOutlinePhotograph
          size="2rem"
          className={`icon-pic${!props.photo ? ' disabled' : ''}`}
          onClick={props.photo ? () => openModal('photo') : null}
        />
        <RiVideoLine
          size="2rem"
          className={`icon-video${!props.video ? ' disabled' : ''}`}
          onClick={props.video ? () => openModal('video') : null}
        />
      </div>
      <h2 className="quote-text">{props.quote}</h2>
      <p className="quote-author">- {props.author}</p>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            {/* {currentMediaType === 'sound' && (
              <div>
                <audio ref={audioRef} controls>
                  <source src={props.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )} */}
            {currentMediaType === 'photo' && (
              <div>
                <img src={props.photo} alt="" />
              </div>
            )}
            {currentMediaType === 'video' && (
              <div>
                <video ref={videoRef} controls>
                  <source src={props.video} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
