import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Zoom,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Modal from 'react-bootstrap/Modal';

const ExpandedView = (props) => {
  const {
    currentStyle,
    setExpandedSwiper,
    showModal,
    setShowModal,
    mainIndex,
    mainSwiper,
  } = props;

  SwiperCore.use([Navigation, Pagination, Controller, Zoom]);

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size={'lg'}
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          zoom={{
            maxRatio: 2.5,
            toggle: true,
          }}
          onSwiper={setExpandedSwiper}
          controller={{ control: mainSwiper }}
          className="expanded-swiper"
          observer
          initialSlide={mainIndex}
        >
          {currentStyle.photos.map((photoObj, index) => (
            <SwiperSlide key={index} className="expanded-slide">
              <div className="swiper-zoom-container">
                <img src={photoObj.url} className="expanded-img" alt={`Slide ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal.Body>
    </Modal>
  );
};

export default ExpandedView;
