import { useState, useEffect } from "react";

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-float">
      <a href="#contato"
        onClick={scrollToForm}
        className="shadow-lg text-white font-medium rounded-full bg-green-800 hover:bg-green-700"
        style={{
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
        }}
      >
        Quero Orçar Agora
      </a>
    </div>
  );
}
