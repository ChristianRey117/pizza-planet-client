import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import ava04 from "../../../assets/images/ava-4.jpg";
import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "¡Me encanta Pizza Planeta! Cada vez que visito Mérida, es una parada
          obligatoria. Sus pizzas son simplemente espectaculares y siempre
          frescas. Me gusta especialmente la 'Pizza Estelar' con ingredientes
          locales. El ambiente es relajado y el personal es muy amable.
          ¡Altamente recomendado para los amantes de la pizza y los sabores
          únicos de Yucatán!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Pizza Planeta es un lugar encantador con pizzas que te hacen viajar
          por el espacio de los sabores. Probé la 'Pizza Galáctica' y estaba
          deliciosa, con una masa perfectamente horneada y una combinación de
          ingredientes frescos que realmente resaltaban. El ambiente es
          acogedor, aunque a veces puede estar un poco concurrido. En general,
          una gran opción para una comida diferente en el centro de Mérida."
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className="rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "¡Mis amigos y yo somos fanáticos de Pizza Planeta! Cada visita es una
          experiencia culinaria emocionante. Las pizzas son únicas y deliciosas,
          y me encanta que utilicen ingredientes locales. Además, el personal
          siempre es amable y servicial. Si estás buscando una pizza con un giro
          creativo en Mérida, definitivamente debes probar Pizza Planeta. ¡Es
          genial!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Missi Lou</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
