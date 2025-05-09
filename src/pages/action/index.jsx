export  function Action() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 bg-[hsla(222.2,47.4%,11.2%,0.04)]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          💥 Agenda Limitada para Diagnósticos Gratuitos!
        </h2>
        
        <div className="bg-white p-6 rounded-lg shadow-2xl mb-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Estamos selecionando empresas para receber uma análise gratuita do Instagram + 
            sugestão de estratégia de tráfego personalizada.
            <br /><br />
            <span className="font-semibold">
              Vagas limitadas por semana para manter o atendimento de excelência.
            </span>
          </p>
          
          <p className="text-xl font-medium mb-6">
            👉 Garanta agora a sua análise exclusiva.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="bg-green-800 hover:bg-green-700 rounded-md text-white px-12 py-4  text-lg"
          >
            Quero minha análise gratuita
          </button>
        </div>
      </div>
    </section>
  );
}