import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(true); // Já começa visível

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true); // Sempre visível. Ajuste se quiser esconder no topo.
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
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-float"
    >
      <Button
        onClick={scrollToForm}
        className="shadow-lg text-white font-medium rounded-full bg-green-800 hover:bg-green-700"
        style={{
          padding: "0.5rem 1rem", // mobile (8px 16px)
          fontSize: "0.875rem", // 14px
        }}
      >
        Quero Orçar Agora
      </Button>
    </div>
  );
}