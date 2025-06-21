import React from "react";
import { IMAGE_BASE_URL } from "../config";
import Button from './Button';

const PromoSection = () => (
  <section
    className="w-full relative flex items-center justify-center min-h-[600px] bg-black overflow-hidden"
    style={{
      backgroundImage: `url('${IMAGE_BASE_URL}discount-background-YKblLgoJzLfRv2pN.webp')`, // Cambia esta ruta por la de tu imagen cuando la tengas
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay negro semitransparente para mejorar contraste */}
    <div className="absolute inset-0 bg-black/60 z-0" />
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 py-20">
      <h2 className="text-white text-[64px] mb-6 drop-shadow-lg">
        DISCOUNT UP TO 30% ONLY THIS MONTH
      </h2>
      <p className="text-white text-[40px] font-roboto mb-10 drop-shadow-lg">
        Quality and flavor for your celebrations. Place <br /> your order now and enjoy!
      </p>
       <Button variant="outline-white" size="lg" className="text-[34px]">
          READ MORE
        </Button>
    </div>
  </section>
);

export default PromoSection;