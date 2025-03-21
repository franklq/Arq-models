
import React from 'react'
const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">          
          <section id="projects" className="container mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold text-center text-secondary mb-8">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <img className="rounded-lg shadow" src="https://content.arquitecturaydiseno.es/medio/2020/07/29/fotograma-del-corto-the-future-aint-the-same-as-it-used-to-be-de-chris-labrooy-f900a04e-768x432_6e11674f_768x432.jpg" alt="Project 1"/>
        <img className="rounded-lg shadow" src="https://content.arquitecturaydiseno.es/medio/2020/07/29/piscina-infinita-con-vistas-de-360-grados-a-londres-c43dc177-1500x930_847d6a9d_1500x930.jpg" alt="Project 2"/>
        <img className="rounded-lg shadow" src="https://content.arquitecturaydiseno.es/medio/2020/07/29/la-vivienda-de-formas-aerodinamicas-lleva-su-relacion-con-el-agua-a-otro-nivel-de-la-mano-del-arquitecto-frances-david-tajchman-43692def-1500x871_5ae8757b_1500x871.jpg" alt="Project 3"/>
      </div>
    </section>          
        </div>
  )
}

export default Projects
