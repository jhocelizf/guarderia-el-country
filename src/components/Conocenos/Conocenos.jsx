import React from 'react';
import './Conocenos.css'
import { Image } from 'react-bootstrap'
import lperroAzul from '../../assets/images/Perro - azul.svg'
import CarouselReviews from '../CarouselReviews/CarouselReviews'
import CarouselMid from '../../assets/images/Pampa-Bubba-Petit (42) 1.jpg'
import CarouselIni from '../../assets/images/Pampa-Bubba-Petit (34) 1.jpg'
import CarouselSec from '../../assets/images/Pampa-Bubba-Petit (27) 1.jpg'
import CarouselCua from '../../assets/images/Pampa-Bubba-Petit (24) 1.jpg'
import CarouselQui from '../../assets/images/Pampa-Bubba-Petit (35) 1.png'
import { useState } from 'react';



const Conocenos = () => {
    const [activeColumn, setActiveColumn] = useState(null);

    return (
        <>
        <div className='bgC'>
        <div className='sec3'>
            <div className='contPrinc'>
                <div className='cabeza'>
                    <Image className='lperroAzul' src={lperroAzul}/>
                    <h1 className='nosotrasTitle'> Nosotras</h1>
                </div>
                <div className='carrouselFotosContainer'>
                    <div  className="slide2" >
                        <div>
                            <div className='carrouselFotos'>
                                <div  className={`colCar ${activeColumn === 'colCar' ? 'colCarT' : ''}`} onMouseEnter={() => setActiveColumn('colCar')} onMouseLeave={() => setActiveColumn(null)}>
                                        <div>
                                            <div className="image-container2">
                                                <Image  src={CarouselIni} className='imgCar'  />
                                            </div>
                                        </div>
                                </div>
                                <div className={`colCar1 ${activeColumn === 'colCar1' ? 'colCarT' : ''}`}    onMouseEnter={() => setActiveColumn('colCar1')} onMouseLeave={() => setActiveColumn(null)}>
                                        <div>
                                            <div className="image-container2">
                                                <Image  src={CarouselSec} className='imgCar' />
                                            </div>
                                        </div>
                                </div>
                                <div className={`colCar2 ${activeColumn === 'colCar2' || activeColumn === null ? 'colCarT' : ''}`} onMouseEnter={() => setActiveColumn('colCar2')} onMouseLeave={() => setActiveColumn(null)}>
                                        <div className='card1'>
                                            <div className="image-container2">
                                                <Image  src={CarouselMid} className='imgCar' />
                                            </div>
                                        </div>
                                </div>
                                <div className={`colCar3 ${activeColumn === 'colCar3' ? 'colCarT' : ''}`}    onMouseEnter={() => setActiveColumn('colCar3')} onMouseLeave={() => setActiveColumn(null)}>
                                        <div>
                                            <div className="image-container2">
                                                <Image  src={CarouselCua} className='imgCar' />
                                            </div>
                                        </div>
                                </div>
                                <div className={`colCar4 ${activeColumn === 'colCar4' ? 'colCarT' : ''}`}    onMouseEnter={() => setActiveColumn('colCar4')} onMouseLeave={() => setActiveColumn(null)}>
                                        <div>
                                            <div className="image-container2">
                                                <Image  src={CarouselQui} className='imgCar' />
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subTitulo'>
                <h2>Reseñas</h2>
            </div>
            <div className='carrouselReviews'>
                        <CarouselReviews/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Conocenos