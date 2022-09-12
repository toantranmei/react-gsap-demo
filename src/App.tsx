import { useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap.fromTo(
        (element as HTMLElement).querySelector(".first-paragraph"),
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector(".first"),
            start: "top top",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (element)
      gsap.fromTo(
        (element as HTMLElement).querySelector("#gsap-logo"),
        {
          opacity: 0,
          scale: 0.2,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector(".first"),
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (element)
      gsap.from((element as HTMLElement).querySelector(".line"), {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: (element as HTMLElement).querySelector(".third"),
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      });
  }, []);

  return (
    <div className="App" ref={ref}>
      <div className="first">
        <h1>ScrollTrigger</h1>
        <p className="first-paragraph">
          is the coolest plugin.
          <span role="img" aria-label="celebrating">
            🥳
          </span>
        </p>
        <div className="logo-main">
          <img src={reactLogo} id="workout-logo" alt="workout" />
        </div>
      </div>
      <div className="second">
        <div className="logo-main">
          <img src={reactLogo} id="gsap-logo" alt="greensocklogo" />
        </div>
      </div>
      <div className="third">
        <p>
          <span className="line" />
        </p>
        <div className="logo-main">
          <img src={reactLogo} id="happy-logo" alt="happy" />
        </div>
      </div>
    </div>
  );
}

export default App;
