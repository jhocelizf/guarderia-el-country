import React from "react";
import "./SobreNosotras.css";
import perroAzul from '../../assets/images/perroAzul.png';
import perroNaranja2 from '../../assets/images/perroNaranja2.png';
import perroBeige from '../../assets/images/perroBeige.png';
import perrosAzules from '../../assets/images/perrosAzules.png';
import perrosNaranjas from '../../assets/images/perrosNaranjas.png';
import perrosBeige from '../../assets/images/perrosBeige.png';
import perroAzulTablet from '../../assets/images/perroAzulTablet.png';
import perroNaranjaTablet from '../../assets/images/perroNaranjaTablet.png';
import dosAzulTablet from '../../assets/images/dosAzulTablet.png';
import tresNaranjaTablet from '../../assets/images/tresNaranjaTablet.png';
import perroBeigeTlf from '../../assets/images/perroBeigeTlf.png';
import perrosBeigeTlf from '../../assets/images/perrosBeigeTlf.png';

const SobreNosotras = () => {
    return (
        <>
            <div className="bg">
                <div className="containerNosotras">
                    <div className="cCol">
                        <div className="info">
                            <h2>¿Quiénes somos?</h2>
                            <div><img src={perroAzulTablet} alt="" className="perroTablet"/></div>
                            <p>Somos una familia compuesta por dos educadoras caninas, y tres perras sociables que abren las puertas
                                de su casa pra todos aquellos perritos que lo necesiten mientras sus tutores
                                responsables están de viaje.</p>
                        </div>
                        <div className="containerImag">
                            <div className="fondoAzul"> </div>
                            <img src={perroAzul} alt="" className="perroAzul" />
                        </div>
                    </div>
                    <div className="cColRer">
                        <div className="info2">
                            <h2>¿Por qué elegirnos?</h2>
                            <div><img src={perroNaranjaTablet} alt="" className="perroTablet"/></div>
                            <p>Porque tu perro va a estar en las mejores manos, le brindaremos amor para que se sienta como en su hogar, respeto, estará en un entorno familiar,
                                y mantendremos su rutina diaria. Le brindaremos nuestro espacio, y será su segunda casa.</p>
                        </div>
                        <div className="containerImagNaranja">
                            <div className="fondoNaranja"></div>
                            <img src={perroNaranja2} alt="" className="perroNaranja2" />
                        </div>
                    </div>
                    <div className="cColBri">
                        <div className="infoUl">
                            <h2>¿Qué brindamos?</h2>
                            <div><img src={perroBeigeTlf} alt="" className="perroPhoneBeige"/></div>
                            <div className="divUl">
                                <ul>
                                    <li>Responsabilidad: al ser educadoras, tenemos mucho conocimiento sobre las necesidades básicas
                                        de un perro.</li>
                                    <li>Transparencia, sobre dónde va a estar: estará libre por toda la casa ya
                                        que no usamos caniles.</li>
                                    <li>Flexibilidad: No hay un mínimo o máximo de tiempo de estadía. Además,
                                        disponemos de movilidad para llevarlo a una veterinaria en caso de ser
                                        necesario por cualquier tipo de urgencia.</li>
                                    <li>Por último, festejamos fechas festivas: Navidad, día de la primavera,
                                        día de la bandera, entre otros.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="containerImagBeige">
                            <div className="fondoBeige"> </div>
                            <img src={perroBeige} alt="" className="perroBeige" />
                        </div>
                    </div>
                    <div className="cColEsp">
                        <div className="info3">
                            <h2>¿Cómo es el espacio?</h2>
                            <div><img src={dosAzulTablet} alt="" className="perroTablet"/></div>
                            <p>Contamos con una casa de 170 metros cuadrados y un lote de 700 metros, servicio de seguridad las 24 hs,
                                aire acondicionado y pileta cercada en verano (tu perrito contará con salvavidas).</p>
                        </div>
                        <div className="containerImagAzul">
                            <div className="fondoAzul"> </div>
                            <img src={perrosAzules} alt="" className="perrosAzules" />
                        </div>
                    </div>
                    <div className="cColTraer">
                        <div className="info4">
                            <h2>¿Qué debo traer?</h2>
                            <div><img src={tresNaranjaTablet} alt="" className="perroTablet"/></div>
                            <p>Para seguridad y salud de los perritos, tu mascota debe tener todas las vacunas y desparasitaciones al día, incluida la vacuna de la tos de las perreras. Traer su comida balanceada, vasito medidor y su camita para no perder la costumbre y se sienta siempre como en casa. En cuanto a higiene, trae
                                su pipeta contra pulgas para que se la coloquemos ni bien entre a la casa para garantizar sanidad y cuidado.
                            </p>
                        </div>
                        <div className="containerImagTrioN">
                            <div className="fondoNaranja">    </div>
                            <img src={perrosNaranjas} alt="" className="perrosNaranjas" />
                        </div>
                    </div>
                    <div className="cColAdapT">
                        <div className="info5">
                            <h2>Día de adaptación</h2>
                            <div><img src={perrosBeigeTlf} alt="" className="perroPhone"/></div>
                            <p>Este día será importante para que tu retoño pueda adquirir el servicio de guardería; se observará si puede
                                adaptarse a nuestra rutina, a la compañía de nuestras perras y su comportamiento ante este nuevo hogar en el
                                cual permanecerá unos días. Es un requisito que tu perrito esté castrado y tenga un excelente comportamiento
                                para poder mantener un ambiente de armonía en casa.</p>
                        </div>
                        <div className="containerImagTrioB">
                            <div className="fondoBeige">     </div>
                            <img src={perrosBeige} alt="" className="perrosBeige" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default SobreNosotras;