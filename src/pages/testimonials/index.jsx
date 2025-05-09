

export  function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Boutique Fashion",
      text: "Aumentamos em 43% as vendas pelo WhatsApp logo no primeiro mês com a LB Marketing.",
      image: "https://placehold.co/60x60/2d7c4f/FFF?text=BF"
    },
    {
      name: "João Costa",
      company: "Costa Fitness",
      text: "Triplicamos o número de matrículas na academia depois de iniciar as campanhas com a LB.",
      image: "https://placehold.co/60x60/2d7c4f/FFF?text=CF"
    },
    {
      name: "Ana Oliveira",
      company: "Café & Cia",
      text: "Nosso perfil passou de 2 mil para 10 mil seguidores em 3 meses, com alta taxa de engajamento.",
      image: "https://placehold.co/60x60/2d7c4f/FFF?text=C&C"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          Resultados e Depoimentos
        </h2>
        
        <div className="mb-16">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Performance média em campanhas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow">
                <p className="text-3xl font-bold text-green-800 mb-2">+125%</p>
                <p className="text-gray-600">Aumento no alcance</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <p className="text-3xl font-bold text-green-800 mb-2">+89%</p>
                <p className="text-gray-600">Aumento em leads</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <p className="text-3xl font-bold text-green-800 mb-2">+63%</p>
                <p className="text-gray-600">Aumento em orçamentos</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-gray-200">
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}