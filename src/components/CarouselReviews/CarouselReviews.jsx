
import '../CarouselReviews/CarouselReviews.css'
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';
import pic5 from '../../assets/images/pic5.png';
import pic6 from '../../assets/images/pic6.png';

import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';



const CarouselReviews = () => {


    const [mediaQuery, setmediaQuery] = useState(false);

    useEffect(() => {
        const adaptar = () => {
            if (window.innerWidth <= 480) {
                console.log("funciona");
                setmediaQuery(true);
            } else {
                console.log("es mayor a 480");
                setmediaQuery(false);
            }
        };

        window.addEventListener('mq', adaptar);
        adaptar();

        return () => {
            window.removeEventListener('mq', adaptar);
        };
    }, []);

    return (
        <>

<Swiper
        slidesPerView={3}
        spaceBetween={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <div className='slideCont'>
                <div className="slideContent">
                    <div className="cardWrapper">
                        <div className="card">
                            <div className="imageContent">
                                <span className="overlay"></span>
                                <div className="cardImage">
                                    <img src={pic1} alt="" className="cardImg" />
                                </div>
                            </div>
                            <div className="cardContent">
                                 <h2 className="name">Mónica Zimmermann</h2>
                                 <p className="edad">56 años</p>
                                 <p className="description"> “Fue una muy buena experiencia. Guiti adora a Yani y a sus gordas. Es una excelente
                                            persona y profesional. La queremos mucho. Siempre atenta a las necesidades de Guiti y nuestra”</p>                    
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            </SwiperSlide>
        <SwiperSlide> <div className='slideCont'>
                <div className="slideContent">
                    <div className="cardWrapper">
                        <div className="card">
                            <div className="imageContent">
                                <span className="overlay"></span>
                                <div className="cardImage">
                                    <img src={pic2} alt="" className="cardImg" />
                                </div>
                            </div>
                            <div className="cardContent">
                                 <h2 className="name">Nara Penerbosa</h2>
                                 <p className="edad">33 años</p>
                                 <p className="description">“Les dejamos a Tita y nuestra experiencia fue buenísima! Nos contaba cómo estaba, mandaba videos e
                                            incluso la dejaron dormir al lado de la cama!
                                            No tengo más agradecimiento por cómo se portaron, recomiendo al 100%.”</p>                    </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            </SwiperSlide>
        <SwiperSlide> <div className='slideCont'>
                <div className="slideContent">
                    <div className="cardWrapper">
                        <div className="card">
                            <div className="imageContent">
                                <span className="overlay"></span>
                                <div className="cardImage">
                                    <img src={pic3} alt="" className="cardImg" />
                                </div>
                            </div>
                            <div className="cardContent">
                                 <h2 className="name">Camila Strack</h2>
                                 <p className="edad">30 años</p>
                                 <p className="description"> “Haber dejado a China con las chicas fue lo mejor que hicimos. Además recibimos consejos sobre la
                                            conducta que las chicas veían día a día y nos permitió mejorar como papás de Chinita.
                                            Super recomendables. Encima China las ama! “</p>                    </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className='slideCont'>
                <div className="slideContent">
                    <div className="cardWrapper">
                        <div className="card">
                            <div className="imageContent">
                                <span className="overlay"></span>
                                <div className="cardImage">
                                    <img src={pic4} alt="" className="cardImg" />
                                </div>
                            </div>
                            <div className="cardContent">
                                 <h2 className="name">Andrea Truszkowski</h2>
                                 <p className="edad">47 años</p>
                                 <p className="description"> “Excelente experiencia! Muy recomendable, Tokyo se quedo en 2 oportunidades, estuvo muy bien cuidada. Los grupos son reducidos y el cuidado es personalizado.
                                            Muchas gracias por cuidarla tan bien!!”</p>                    </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slideCont'>
                <div className="slideContent">
                    <div className="cardWrapper">
                        <div className="card">
                            <div className="imageContent">
                                <span className="overlay"></span>
                                <div className="cardImage">
                                    <img src={pic5} alt="" className="cardImg" />
                                </div>
                            </div>
                            <div className="cardContent">
                                 <h2 className="name">Paula Rodriguez</h2>
                                 <p className="edad">27 años</p>
                                 <p className="description"> “Tina tuvo una experiencia perfecta! Están atentas a todos los detalles, y puedes ver un ratito del día de tu perritx, lo que lo hace sentir cercano y cuidado ❤️ Muy valioso, no es fácil encontrar un lugar confiable para su cuidado.”</p>                    </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide> <div className='slideCont'>
                <div className="slideContent">
                    <div className="cardWrapper">
                        <div className="card">
                            <div className="imageContent">
                                <span className="overlay"></span>
                                <div className="cardImage">
                                    <img src={pic6} alt="" className="cardImg" />
                                </div>
                            </div>
                            <div className="cardContent">
                                 <h2 className="name">María Ines Padula</h2>
                                 <p className="edad">58 años</p>
                                 <p className="description"> “Fue la primera vez de Paris, nuestra frenchie, de pasar unos dias fuera de casa. Se adapto muy fácilmente. Diariamente nos enviaban fotos y videos. Estoy muy agradecida!! es grato saber que podemos contar con la guardería.”</p>                    </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            </SwiperSlide>
      </Swiper>





           
        </>
    );
}

export default CarouselReviews;