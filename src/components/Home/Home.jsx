import React from 'react'
import './Home.css';
import perroNaranja from '../../assets/images/Perro - Naranja.png'
import { Image } from 'react-bootstrap';
import CarouselReviews from '../CarouselReviews/CarouselReviews';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className='bgh'>
                <div className='mainContainer'>
                    <div className='sec1Cont'>
                        <div className='innerCont'>
                            <div className='col1'>
                                <div className='texto'>

                                    <h1 className='titulo'> El Country </h1>
                                    <p className='pText'>Alojamiento para perros compuesto por dos educadoras caninas y tres perritas las cuales acompañarán a tu pequeño mientras debas ausentarte.</p>
                                    <p className='pText'>Conócenos e infórmate sobre nuestro servicio brindado con la mejor calidad y cuidado para tu perro, ¡se sentirá como en casa en todo momento!</p>
                                    <div className='contButton'>
                                    
                                        <Link className="" to="contactanos" >
                                            <button className="button">
                                                Contáctanos
                                            </button>
                                        </Link>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className='col2'>
                                <div className='imagGroup'>
                                    <div className="background "></div>
                                    <Image className='imgPerro' src={perroNaranja}/> 
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                    <div className='sec2Cont'>
                        <div className='testCards'>
                        <CarouselReviews/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home