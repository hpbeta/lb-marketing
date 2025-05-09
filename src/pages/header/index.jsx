import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/lb-marketing.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#problemas", label: "Problemas" },
    { href: "#quemsomos", label: "Quem somos" },
    { href: "#servicos", label: "Serviços" },
    { href: "#resultados", label: "Resultados" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed  top-0 left-0 w-full z-50 bg-white shadow-lg px-6 md:px-12 h-20 flex justify-between items-center">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo tipo LB Marketing" className="w-32" />
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-green-800"
        aria-label="Abrir Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className="hidden md:flex gap-6 items-center">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="relative text-gray-800 py-1 px-3 rounded-md group transition-colors duration-300"
          >
            {label}
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 border-b-2 border-green-800"></div>
          </a>
        ))}
        <a
          href="#orcamento"
          className="text-white font-bold bg-green-800 hover:bg-green-500 py-1 px-3 rounded-md transition-colors duration-300"
        >
          Quero Orçar
        </a>
      </nav>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <nav className="absolute top-20 left-0 w-full bg-white flex flex-col gap-4 items-center py-6 shadow-md md:hidden">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-gray-800 text-lg group"
              onClick={() => setIsOpen(false)}
            >
              {label}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 border-b-2 border-green-800"></div>
            </a>
          ))}
          <a
            href="#orcamento"
            className="text-white font-bold bg-green-800 hover:bg-green-500 py-1 px-3 rounded-md transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Quero Orçar
          </a>
        </nav>
      )}
    </header>
  );
}
