const Hero = () => {
    return (
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">
          Bienvenido a Nuestro Estudio de Arquitectura
        </h1>
        <p className="text-xl mb-8 animate-fadeIn delay-200">
          Diseñando espacios innovadores y sostenibles.
        </p>
        <a
          href="/projects"
          className="inline-block bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Ver Proyectos
        </a>
      </div>
    );
  };
  
  export default Hero;