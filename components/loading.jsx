"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Loading = () => {
  useGSAP(() => {
    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.from(".loader-wrap-heading h1", {
      delay: 1,
      y: 200,
      skewY: 10,
    }).to(".loader-wrap-heading h1", {
      delay: 1.5,
      y: -200,
      skewY: 10,
    });
    tl.to(svg, {
      duration: 0.8,
      attr: { d: curve },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.8,
      attr: { d: flat },
      ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
      y: -1500,
    });
    tl.to(".loader-wrap", {
      zIndex: -1,
      display: "none",
    });
    tl.from(
      ".container h1",
      {
        y: 100,
        opacity: 0,
      },
      "-=1.5",
    );
  });
  return (
    <div>
      {" "}
      <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div className="loader-wrap-heading">
          <span>
            <h1>Loading</h1>
          </span>
        </div>
      </div>
      <div className="container">
        <span>
          <h1>Ariana Grande</h1>
        </span>
      </div>
    </div>
  );
};

export default Loading;
