export function Hero() {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto p-8 mt-48">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 animate-slide-down text-center leading-relaxed">
        <span className="text-red-500">📉</span> Sua empresa está estagnada no
        Instagram?
      </h1>
      <p className="text-lg text-center md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
        Poucas curtidas, comentários quase inexistentes, alcance despencando e
        nenhuma solicitação no WhatsApp? Isso não é coincidência — é falta de
        estratégia profissional em tráfego pago.
      </p>
      <p className="font-bold text-2xl text-center  bg-[#e7f0eb] text-green-800 rounded-lg p-6">
        🚀 A LB Marketing transforma seguidores em clientes com campanhas que
        vendem todos os dias.
      </p>
      <p className="font-medium mt-7 text-lg text-center">
        👉 Clique no botão abaixo e receba um diagnóstico gratuito da sua
        presença digital!
      </p>

      <a
        href="#contato"
        className="text-white font-bold mt-8 bg-green-800 hover:bg-green-500 hover:text-white  px-8 py-3 text-lg  rounded-md transition-colors duration-300"
      >
        Quero mais cliente agora -{">"}
      </a>
    </div>
  );
}
