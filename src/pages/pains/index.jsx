const dores = [
  { id: 1, icon: "📉", text: "Alcance orgânico despencando" },
  {
    id: 2,
    icon: "😩",
    text: "Poucas ou nenhuma interação",
  },
  {
    id: 3,
    icon: "🔇",
    text: "Stories com menos de 100 visualizações",
  },
  {
    id: 4,
    icon: "❌",
    text: "Zero solicitações de orçamento",
  },
  {
    id: 5,
    icon: "🧊",
    text: "Queda constante de seguidores",
  },
  {
    id: 6,
    icon: "🆘",
    text: "Sensação de que a marca está travada",
  },
];
export function Pains() {
  return (
    <main className="flex flex-col items-center justify-start mt-10">
      <h1 className="font-bold text-3xl mb-10">As Dores do Seu Negócio Hoje</h1>

      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dores.map((dor) => (
            <li
              key={dor.id}
              className=" hover:shadow-lg transition-shadow duration-300 text-lg font-medium text-gray-700 flex flex-col  items-center rounded-md p-6 border border-[#f0f0f0]"
            >
              <span className="text-3xl">{dor.icon}</span>
              <p className="text-lg font-medium text-gray-700 p-6 w-72 text-center">
                {" "}
                {dor.text}
              </p>
            </li>
          ))}
        </ul>
        <p className=" font-bold  bg-[#f3f4f6] p-7 rounded-md mb-10 text-2xl mt-10 flex items-center justify-center">
          Se você sente tudo isso, você não está sozinho. E o melhor:{" "}
          <span className=" ml-2 text-green-800">existe solução</span>.
        </p>
      </div>
    </main>
  );
}
