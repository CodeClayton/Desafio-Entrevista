'use client';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useLayoutEffect, useState } from 'react';
import './SliderAchiv.css';
export default function SliderAchivements() {

  const [slidesPerView, setSlidesPerView] = useState(3);


  //Funcao para deixar o carrousel responsivo
  useLayoutEffect(() => {
    function updateSlidesPerView() {
      setSlidesPerView(window.innerWidth <= 1300 ? 2 : 3);
    }

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);


  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0} 
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="slideArchivements slide1">
            <p className="descArchivements">Cursos com nota máxima na avaliação do mec</p>
            </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="slideArchivements slide2">
            <p className="descArchivements">+ de 2.500 empresas e órgãos públicos conveniados</p>
            </div>
          </SwiperSlide>
        <SwiperSlide>
            <div className="slideArchivements slide3">
            <p className="descArchivements">Estágio remunerado desde os primeiros períodos</p>
            </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="slideArchivements slide4">
            <p className="descArchivements">Professores mestres e doutores</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
