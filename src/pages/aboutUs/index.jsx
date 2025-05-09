import reuniao from "../../assets/reuniao.jpg";

export function AboutUs() {
  return (
    <main className="flex flex-col items-center mt-1 mb-20 p-20">
      <h1 className="font-bold text-3xl mb-20">Quem Somos – LB Marketing</h1>

      <div className="flex  items-center justify-center w-full flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[400px]">
          <img
            src={reuniao}
            alt="Imagem de pessoas fazendo uma reunião"
            className="w-[650px] h-[550px] object-cover rounded-md"
          />
        </div>
        <div className=" w-full md:w-1/2 h-[400px] mt-24  flex flex-col items-center ">
          <p className="text-lg font-semibold mb-5 w-[600px] text-gray-800 leading-relaxed">
            Somos uma consultoria com foco em performance. Há mais de 4 anos no
            mercado, transformamos perfis e negócios em verdadeiras máquinas de
            venda com gestão de tráfego, anúncios inteligentes e foco em
            conversão real.
          </p>{" "}
          <p className="text-lg mb-5 font-semibold  w-[600px] text-gray-800 leading-relaxed">
            Trabalhamos com empresas de diversos segmentos, criando estratégias
            digitais sob medida que ajudam a aumentar a visibilidade, atrair
            clientes qualificados e melhorar as taxas de conversão. 
          </p>{" "}
          <p className="text-lg mb-5 font-semibold  w-[600px] text-gray-800 leading-relaxed">Nosso time é
            composto por especialistas em marketing digital, análise de dados e
            estratégias de crescimento, sempre buscando soluções inovadoras para
            cada cliente.</p>
          <p className="text-lg mb-5 font-semibold  w-[600px] text-gray-800 leading-relaxed">
            Nós entregamos resultados reais, mensuráveis e sustentáveis, que
            impactam diretamente no seu retorno sobre investimento (ROI) e no
            crescimento da sua marca no mercado.
          </p>
          .
        </div>
      </div>
    </main>
  );
}
