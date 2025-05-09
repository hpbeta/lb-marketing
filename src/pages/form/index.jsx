export function ContactForm() {
  const revenueOptions = [
    { value: "0-5000", label: "Até R$ 5.000" },
    { value: "5001-10000", label: "R$ 5.001 a R$ 10.000" },
    { value: "10001-50000", label: "R$ 10.001 a R$ 50.000" },
    { value: "50001+", label: "Acima de R$ 50.000" },
  ];

  const segmentOptions = [
    { value: "ecommerce", label: "E-commerce" },
    { value: "services", label: "Prestação de Serviços" },
    { value: "food", label: "Alimentação" },
    { value: "beauty", label: "Beleza e Estética" },
    { value: "health", label: "Saúde" },
    { value: "education", label: "Educação" },
    { value: "other", label: "Outros" },
  ];

  return (
    <section id="contato" className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 relative group">
          Solicite Sua Análise Gratuita
          <div className="w-0 group-hover:w-32 transition-all duration-300 border-b-2 border-green-800 mx-auto mt-2"></div>
        </h2>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                placeholder="Seu nome completo"
                required
                className="mt-1 w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="instagram">Instagram da empresa</label>
              <input
                id="instagram"
                name="instagram"
                placeholder="@suaempresa"
                required
                className="mt-1 w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="segment">Segmento</label>
              <select
                id="segment"
                name="segment"
                required
                className="mt-1 w-full border rounded px-3 py-2"
              >
                <option value="" disabled>
                  Selecione o segmento
                </option>
                {segmentOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="whatsapp">WhatsApp</label>
              <input
                id="whatsapp"
                name="whatsapp"
                placeholder="(00) 00000-0000"
                required
                className="mt-1 w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="revenue">
                Faturamento médio mensal (opcional)
              </label>
              <select
                id="revenue"
                name="revenue"
                className="mt-1 w-full border rounded px-3 py-2"
              >
                <option value="">Selecione uma faixa</option>
                {revenueOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className=" m-auto block text-white font-bold bg-green-800 hover:bg-green-500 hover:text-white py-3 px-5 rounded-md transition-colors duration-300"
            >
              Quero mais cliente com tráfego pago
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
