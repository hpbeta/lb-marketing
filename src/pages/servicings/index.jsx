
export  function Services() {
  const services = [
    {
      icon: "🎯",
      title: "Estratégia de mídia",
      description: "Atrair os clientes certos para seu negócio."
    },
    {
      icon: "📲",
      title: "Otimização de anúncios",
      description: "Campanhas otimizadas no Instagram e Facebook."
    },
    {
      icon: "💰",
      title: "Aumento nas conversões",
      description: "Mais leads e orçamentos via WhatsApp."
    },
    {
      icon: "📊",
      title: "Relatórios claros",
      description: "Acompanhamento semanal do seu investimento."
    },
    {
      icon: "🧠",
      title: "Conteúdo otimizado",
      description: "Criativos que geram engajamento e vendas."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800  relative group">
          O Que Vamos Fazer por Você
          <div className="w-0 group-hover:w-32 transition-all duration-300 border-b-2 border-green-800 mx-auto mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-[#f0f0f0] hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}