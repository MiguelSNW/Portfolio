import TiltedCard from "../assets/reactbits/TiltedCard";
import { useState, useEffect } from "react";

export default function CardTecnologia({ nombre, imagen }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Tamaños variables según rango de pantalla
  let containerSize = "110px";
  let imageSize = "80px";

  if (screenWidth <= 400) {
    containerSize = "70px";
    imageSize = "50px";
  } else if (screenWidth <= 560) {
    containerSize = "90px";
    imageSize = "65px";
  }

  return (
    <TiltedCard
      imageSrc={imagen}
      altText={nombre}
      captionText={nombre}
      containerHeight={containerSize}
      containerWidth={containerSize}
      imageHeight={imageSize}
      imageWidth={imageSize}
      rotateAmplitude={0}
      scaleOnHover={1.05}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={<p className="tilted-card-demo-text"></p>}
    />
  );
}
