import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function ContactForm() {
  const navigate = useNavigate();

  const revenueOptions = [
    { value: "0-5000", label: "Até R$ 5.000" },
    { value: "5001-10000", label: "R$ 5.001 a R$ 10.000" },
    { value: "10001-50000", label: "R$ 10.001 a R$ 50.000" },
    { value: "50001-100000", label: "R$ 50.001 a R$ 100.000" },
    { value: "100001-200000", label: "R$ 100.001 a R$ 200.000" },
    { value: "200001+", label: "Acima de R$ 200.000" },
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

  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    segment: "",
    whatsapp: "",
    revenue: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispara evento do pixel no envio do formulário
    if (window.fbq) {
      window.fbq("trackCustom", "BotaoTrafegoClick");
      console.log("Pixel disparado no botão: Quero mais clientes com tráfego pago");
    }

    const { name, instagram, segment, whatsapp } = formData;

    if (!name || !instagram || !segment || !whatsapp) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      await axios.post(
        "https://v1.nocodeapi.com/hpbeta/google_sheets/rFdgxPESwknLYBuc?tabId=Contato",
        [
          [
            formData.name,
            formData.instagram,
            formData.segment,
            formData.whatsapp,
            formData.revenue || "Não informado",
          ],
        ],
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFormData({
        name: "",
        instagram: "",
        segment: "",
        whatsapp: "",
        revenue: "",
      });

      navigate("/obrigado");
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <section id="contato" className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 relative group">
          Solicite Sua Análise Gratuita
          <div className="w-0 group-hover:w-32 transition-all duration-300 border-b-2 border-green-800 mx-auto mt-2"></div>
        </h2>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                placeholder="Seu nome completo"
                required
                value={formData.name}
                onChange={handleChange}
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
                value={formData.instagram}
                onChange={handleChange}
                className="mt-1 w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="segment">Segmento</label>
              <select
                id="segment"
                name="segment"
                required
                value={formData.segment}
                onChange={handleChange}
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
                value={formData.whatsapp}
                onChange={handleChange}
                className="mt-1 w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="revenue">Faturamento médio mensal (opcional)</label>
              <select
                id="revenue"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
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
              id="botao-trafego"
              type="submit"
              className="m-auto block text-white font-bold bg-green-800 hover:bg-green-500 hover:text-white py-3 px-5 rounded-md transition-colors duration-300"
            >
              Quero mais cliente com tráfego pago
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
