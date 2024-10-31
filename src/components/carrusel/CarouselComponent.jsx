import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import { CardComponent } from "../card/CardComponent";

export function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Resoluciones menores a 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Resoluciones menores a 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="m-11">
          <Link to="/blog">
            <CardComponent
              photo={"/news1.jpeg"}
              title={"Cavali Negotiable Invoices and Factoring 2024"}
              text={"29 de May de 2024"}
            />
          </Link>
        </div>
        <div className="m-11">
          <Link to="/blog">
            <CardComponent
              photo={"/Mario_Firmando_v2.jpg"}
              title={"Luz del Sur formally receives Tres Hermanas and Marcona"}
              text={"29 de May de 2024"}
            />
          </Link>
        </div>
        <div className="m-11">
          <Link to="/blog">
            <CardComponent
              photo={"/noticia.png"}
              title={
                "Indecopi authorized Luz del Sur to acquire the 'Tres Hermanas' and 'Marcona' wind farms"
              }
              text={"25 de March de 2024"}
            />
          </Link>
        </div>
        <div className="m-11">
          <Link to="/blog">
            <CardComponent
              photo={"/xv_latam_leasing.jpg"}
              title={
                "Insightful Discussions on Legal Frameworks, Pandemic Impact, and Leasing Market Trends"
              }
              text={"15 de Novenber de 2023"}
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
}
