import React from 'react'
import { FaRegArrowAltCircleUp, FaRegSmile , FaComments,FaRegMoneyBillAlt,FaRegStar,FaThumbsUp  } from "react-icons/fa";
const About = () => {
   const items = [
      {
        icon: <FaRegArrowAltCircleUp size={40} />,
        title: "EXPERIENCIAS ÚNICAS",
        description: "Construir relaciones duraderas a través de la honestidad, el respeto y la confianza con nuestros clientes, empleados y socios comerciales.",
        color: "text-blue-500",
      },
      {
        icon: <FaRegSmile size={40} />,
        title: "CLIENTES SATISFECHOS",
        description: "Nuestra reputación es clave en la industria de la construcción y seguirá siendo la clave de nuestros éxitos futuros.",
        color: "text-blue-900",
      },
      {
        icon: <FaComments size={40} />,
        title: "INTEGRIDAD",
        description: "Llevar a cabo nuestro negocio de manera legal y ética.",
        color: "text-red-500",
      },
      {
        icon: <FaRegMoneyBillAlt size={40} />,
        title: "LOS MEJORES PRECIOS",
        description: "Somos la mejor solución costo - beneficio en todos nuestros productos y servicios.",
        color: "text-blue-500",
      },
      {
        icon: <FaRegStar size={40} />,
        title: "USTED ES VALIOSO",
        description: "Nuestro objetivo es incrementar su valor con cada servicio que ofrecemos.",
        color: "text-blue-900",
      },
      {
        icon: <FaThumbsUp size={40} />,
        title: "ACCOUNTABILITY",
        description: "Cada socio es totalmente responsable de sus decisiones y acciones. Mismas que pueden ser medidas y evaluadas para llegar a los resultados.",
        color: "text-red-500",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-24 px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Nosotros</h2>
          <p className="uppercase tracking-widest text-sm text-gray-500">
            Somos los mejores
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${item.color} bg-opacity-10`}
              >
                <div className={`${item.color}`}>{item.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
}

export default About