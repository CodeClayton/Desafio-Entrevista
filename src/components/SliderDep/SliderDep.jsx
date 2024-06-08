'use client';

import './sliderDep.css';
import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SliderDep() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/getDeps');
      const data = await response.json();
      console.log(data)
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h2 className='h2Desktop'>Lado a lado com a sua evolução</h2>
      <div className="containerCarrousel">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="InnerAvaliation">
              <img src="/img/feedBack.png" className='imageFeedback' />
              <div className="info">
                <img src="/img/perfil-feedBack.png" className='perfilDep' />
                <div className="infoPerson">
                  <p className="name">Pedro Alvarenga Assis</p>
                  <p className="office">Nome do curso</p>
                </div>
              </div>
              <div className="evaluations">
                <img src="/img/avaliacoes.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InnerAvaliation">
              <img src="/img/feedBack.png" className='imageFeedback' />
              <div className="info">
                <img src="/img/perfil-feedBack.png" className='perfilDep' />
                <div className="infoPerson">
                  <p className="name">Pedro Alvarenga Assis</p>
                  <p className="office">Nome do curso</p>
                </div>
              </div>
              <div className="evaluations">
                <img src="/img/avaliacoes.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InnerAvaliation">
              <img src="/img/feedBack.png" className='imageFeedback' />
              <div className="info">
                <img src="/img/perfil-feedBack.png" className='perfilDep' />
                <div className="infoPerson">
                  <p className="name">Pedro Alvarenga Assis</p>
                  <p className="office">Nome do curso</p>
                </div>
              </div>
              <div className="evaluations">
                <img src="/img/avaliacoes.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="InnerAvaliation">
              <img src="/img/feedBack.png" className='imageFeedback' />
              <div className="info">
                <img src="/img/perfil-feedBack.png" className='perfilDep' />
                <div className="infoPerson">
                  <p className="name">Pedro Alvarenga Assis</p>
                  <p className="office">Nome do curso</p>
                </div>
              </div>
              <div className="evaluations">
                <img src="/img/avaliacoes.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="containerDep">
        <h2 className='depH2'>Quem faz a escolha certa, não se arrepende</h2>
        <div className="sliderDepMob">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {users.map(user => (
              <SwiperSlide key={user._id}>
                <div className="fullScreenSlide">
                  <p className='textDepoiment'>{user.depoiment}</p>
                  <div className="info">
                    <img src="/img/perfil-feedBack.png" className='perfilDep' />
                    <div className="infoPersonMob">
                      <p className="name">{user.name}</p>
                      <p className="office">{user.course}</p>
                    </div>
                  </div>
                  <div className="evaluations">
                    <img src="/img/avaliacoes.png" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
