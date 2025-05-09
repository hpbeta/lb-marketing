import logo from "../../assets/lb-marketing.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg py-6 px-12 flex justify-between items-center">
      <div className="logo">
        <img src={logo} alt="Logo tipo LB Marketing" className="w-32" />
      </div>

      <nav className="flex gap-6">
        <a 
          href="#problemas" 
          className="text-gray-800 hover:text-white hover:bg-green-500 py-1 px-3 rounded-md transition-colors duration-300"
        >
          Problemas
        </a>
        <a 
          href="#quemsomos" 
          className="text-gray-800 hover:text-white hover:bg-green-500 py-1 px-3 rounded-md transition-colors duration-300"
        >
          Quem somos
        </a>
        <a 
          href="#servicos" 
          className="text-gray-800 hover:text-white hover:bg-green-500 py-1 px-3 rounded-md transition-colors duration-300"
        >
          Serviços
        </a>
        <a 
          href="#resultados" 
          className="text-gray-800 hover:text-white hover:bg-green-500 py-1 px-3 rounded-md transition-colors duration-300"
        >
          Resultados
        </a>
        <a 
          href="#contato" 
          className="text-gray-800 hover:text-white hover:bg-green-500 py-1 px-3 rounded-md transition-colors duration-300"
        >
          Contato
        </a>
        <a 
          href="#orcamento" 
          className="text-white font-bold bg-green-800 hover:bg-green-500 hover:text-white py-1 px-3 rounded-md transition-colors duration-300"
        >
          Quero Orçar
        </a>
      </nav>
    </header>
  );
}