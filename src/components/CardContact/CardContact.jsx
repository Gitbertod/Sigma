"use client";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Card } from "flowbite-react";

export function CardContact() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc=""
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex">
        Lima, Perú
      </h5>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="300"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2149676575627!2d-77.04104122418434!3d-12.097430942847764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c840cc91848b%3A0x8738147d3f91b68f!2sSigma%20Safi%20S.A.!5e0!3m2!1sen!2spe!4v1731350698638!5m2!1sen!2spe"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex">
        SIGMA
      </h5>
      <div className="flex">
        <FaLocationDot />
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Av. Santo Toribio 173, San Isidro 15073
        </p>
      </div>
      <div className="flex">
        <BsFillTelephoneFill />
        <a
          href="tel:016117100"
          className="font-normal text-gray-700 dark:text-gray-400"
        >
          +51(01)6117100
        </a>
      </div>
    </Card>
  );
}
