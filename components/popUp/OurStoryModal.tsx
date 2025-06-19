// components/OurStoryModal.tsx
import React, { useEffect, useRef, useCallback } from 'react';

// Importa las imágenes desde la carpeta pública (public/src/images/modalImage/)
const chefHatIcon = '/src/images/modalImage/ourStory1.svg';
const starsIcon = '/src/images/modalImage/ourStory2.svg';
const leafIcon = '/src/images/modalImage/ourStory3.svg';
const closeIcon = '/src/images/modalImage/btnClose.svg';

// Define los tipos para las props del componente OurStoryModal
interface OurStoryModalProps {
  isOpen: boolean;
  onClose: () => void; // Función sin argumentos que no devuelve nada
}

const OurStoryModal: React.FC<OurStoryModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null); // Ref para el contenedor del modal

  // useCallback para memorizar la función de cierre y evitar recreaciones innecesarias
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Controla el scroll del body y el cierre con Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
    } else {
      document.body.style.overflow = 'unset'; // Restaura el scroll
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset'; // Asegura que el scroll se restaure al desmontar
    };
  }, [isOpen, handleClose]); // Dependencias: isOpen y handleClose

  // Manejo de "Trap Focus" para accesibilidad
  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab' && modalRef.current) {
      const focusableElements = Array.from(
        modalRef.current.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el): el is HTMLElement => (el as HTMLElement).tabIndex !== -1 && !(el as HTMLButtonElement).disabled);

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  }, []); // Sin dependencias ya que modalRef.current es estable durante el ciclo de vida del componente

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay - con opacidad del 60% */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-[1000]"
        onClick={handleClose} // Cierra al hacer clic en el overlay
        aria-hidden="true"
      ></div>

      {/* Modal principal */}
      <div
        ref={modalRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   bg-white p-6 md:p-8 rounded-[50px] shadow-2xl z-[1001]
                   max-w-4xl w-[90vw] h-[500px] animate-fade-in-scale-up"
        role="dialog"
        aria-modal="true"   
        aria-labelledby="modal-title"
        onKeyDown={handleKeyDown} // Para trap focus
      >
        {/* Botón de cierre con icono */}
        <button
          onClick={handleClose}
          className="absolute top-14 right-14 text-gray-500 hover:text-gray-700
                     w-10 h-10 flex items-center justify-center outline-none focus:ring-2 focus:ring-blue-500 rounded-full bg-transparent"
          aria-label="Cerrar"
        >
          <img src={closeIcon} alt="Cerrar" className="w-9 h-9" />
        </button>

        {/* Título oculto para accesibilidad */}
        <h2 id="modal-title" className="sr-only">Our Story - Compromiso y Valores</h2>

        {/* Contenido de los pilares */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4 h-full">
          {/* Pilar: Supreme Quality */}
          <div className="flex flex-col items-center text-center p-4">
            <img src={chefHatIcon} alt="Chef's hat icon" className="w-20 h-20 mb-4 text-yellow-700" />
            <h3 className="titleText34 mb-2">Supreme<br />Quality</h3>
            <p className="subtitleText24">
              We select the best ingredients and take care of every detail in their preparation.
            </p>
          </div>

          {/* Pilar: Personalized Service */}
          <div className="flex flex-col items-center text-center p-4">
            <img src={starsIcon} alt="Stars icon" className="w-20 h-20 mb-4 text-yellow-700" />
            <h3 className="titleText34 mb-2">Personalized<br />Service</h3>
            <p className="subtitleText24">
              We adapt to your needs to offer you a unique experience.
            </p>
          </div>

          {/* Pilar: Fresh Commitment */}
          <div className="flex flex-col items-center text-center p-4">
            <img src={leafIcon} alt="Leaf icon" className="w-20 h-20 mb-4 text-yellow-700" />
            <h3 className="titleText34 mb-2">Fresh<br />Commitment</h3>
            <p className="subtitleText24">
              We prioritize local and seasonal products to guarantee freshness and flavor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStoryModal;