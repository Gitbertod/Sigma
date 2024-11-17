import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import { CardComponent } from "../card/CardComponent";
import { useTranslation } from "react-i18next";

export function CarouselComponent() {
  const { t } = useTranslation();

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
              photo={"./news/news1.jpeg"}
              title={t("Carousel.News1.Title")}
              text={t("Carousel.News1.Date")}
            />
          </Link>
        </div>
        <div className="m-11">
          <a href="https://www.desdeadentro.pe/2024/04/luz-del-sur-recibe-formalmente-parques-eolicos-tres-hermanas-y-marcona/">
            <CardComponent
              photo={"./news/Mario_Firmando_v2.jpg"}
              title={t("Carousel.News2.Title")}
              text={t("Carousel.News2.Date")}
            />
          </a>
        </div>
        <div className="m-11">
          <Link to="/blog">
            <CardComponent
              photo={"./news/noticia.png"}
              title={t("Carousel.News3.Title")}
              text={t("Carousel.News3.Date")}
            />
          </Link>
        </div>
        <div className="m-11">
          <Link to="/blog">
            <CardComponent
              photo={"./news/xv_latam_leasing.jpg"}
              title={t("Carousel.News4.Title")}
              text={t("Carousel.News4.Date")}
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
}
