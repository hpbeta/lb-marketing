// import { Separator } from "@/components/ui/separator";
// import logo from "../../assets/lb-marketing.png"

// export  function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-white py-12 px-4">
//       <div className="container mx-auto max-w-5xl">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//           <div className="mb-6 md:mb-0">
//             <img 
//               src={logo}
//               alt="LB Marketing" 
//               className="w-36 h-auto mb-4 mx-auto md:mx-0"
//             />
//             <p className="text-gray-400 text-sm text-center md:text-left">
//               Consultoria e Gestão em Tráfego Pago
//             </p>
//           </div>
          
//           <div className="text-center md:text-right">
//             <p className="mb-2">lucasb@lbmarketing.com.br</p>
//             <p className="mb-4"> (31) 9 9814-2446</p>
//             <p className="text-sm text-gray-400">CNPJ: 41.999.387/0001-19</p>
//           </div>
//         </div>
        
//         <Separator className="bg-gray-700 my-6" />
        
//         <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//           <p>© {currentYear} LB Marketing. Todos os direitos reservados.</p>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
//             <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import logo from "../../assets/lb-marketing.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src={logo}
              alt="LB Marketing" 
              className="w-36 h-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-400 text-sm text-center md:text-left">
              Consultoria e Gestão em Tráfego Pago
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">lucasb@lbmarketing.com.br</p>
            <p className="mb-4"> (31) 9 9814-2446</p>
            <p className="text-sm text-gray-400">CNPJ: 41.999.387/0001-19</p>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} LB Marketing. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Usando Link ao invés de a href */}
            <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link to="/politica" className="hover:text-white transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}