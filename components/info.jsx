"use client";
import Image from "next/image";
import React from "react";
import img1 from "../public/imgs/1.jpg";
import img2 from "../public/imgs/2.jpg";
import img3 from "../public/imgs/3.jpg";
import img4 from "../public/imgs/4.jpg";
import img5 from "../public/imgs/5.jpg";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ReactLenis, useLenis } from "lenis/react";

const Info = () => {
  const lenis = useLenis(({ scroll }) => {});
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cards = document.querySelectorAll(".card");
      const images = document.querySelectorAll(".card img");
      const totalCards = cards.length;

      gsap.set(cards[0], { y: "0%", scale: 1, rotation: 0 });
      gsap.set(images[0], { scale: 1 });

      for (let i = 1; i < totalCards; i++) {
        gsap.set(cards[i], { y: "100%", scale: 1, rotation: 0 });
        gsap.set(images[i], { scale: 1 });
      }

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * totalCards - 1}`,
          pin: true,
          scrub: 0.5,
        },
      });
      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cards[i];
        const currentImage = images[i];
        const nextCard = cards[i + 1];
        const position = i;

        scrollTl.to(
          currentCard,
          {
            scale: 0.5,
            rotation: 10,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTl.to(
          currentImage,
          {
            scale: 1.5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTl.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }
    },
    { scope: container },
  );
  return (
    <ReactLenis root>
      <div ref={container} className="containerr w-full">
        <section className="intro">
          <h1>
            Ariana Grande is more than just a global pop icon – she is a brand.
            With her signature high ponytail, timeless fashion, and powerful
            vocals, Ariana has built a unique identity that resonates across
            music, beauty, and lifestyle.
          </h1>
        </section>
        <section className="sticky-cards w-full">
          <div className="cards-container">
            <div className="card">
              <div className="tag">
                <p>Ariana Grande</p>
              </div>
              <Image src={img1} alt="img1" className="w-full"></Image>
            </div>
            <div className="card">
              <div className="tag">
                <p>Ariana Grande</p>
              </div>
              <Image src={img2} alt="img2" className="w-full"></Image>
            </div>
            <div className="card">
              <div className="tag">
                <p>Ariana Grande</p>
              </div>
              <Image src={img3} alt="img3" className="w-full"></Image>
            </div>
            <div className="card">
              <div className="tag">
                <p>Ariana Grande</p>
              </div>
              <Image src={img4} alt="img4" className="w-full"></Image>
            </div>
            <div className="card">
              <div className="tag">
                <p>Ariana Grande</p>
              </div>
              <Image src={img5} alt="img5" className="w-full"></Image>
            </div>
          </div>
        </section>
        <section className="outro">
          <h1>
            Ariana Grande’s brand is a masterclass in authenticity, elegance,
            and empowerment. Through music, style, and self-expression, she
            continues to inspire and influence a generation.
          </h1>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Info;
