import Mainprincipal from "../organisms/mainprincipal";
import Text1 from "../molecules/text1";
import { Cartilla } from "../organisms/cartilla";
import Info1 from "../organisms/info";
import Portafolio from "../organisms/Portafolio";

export default function Part2() {


  return (
   

    <div className="  w-auto h-auto justify-center items-center   flex flex-col ">
      <div>
        <Mainprincipal />
      </div>
      <div className="flex justify-center items-center">
        <Text1 texta="Mis conocimientos"
          textb="En mi formacion tuve oportunidad de trabajar con lenguajes de programacion como Java, C#, PHP y Python por parte de Backend,
Actualmente estoy más enfocado en el desarrollo Frontend, manejando HTML/CSS, Javascript, React, Tailwind y NextJS
También he tenido la oportunidad de manejar sistemas de base de datos MySQ y plataformas como AzureDevops, Figma, Github y conocimientos sobre trabajo en equipos de tipo Scrum." />
      </div>

      <div className="flex justify-center items-center">
        <Cartilla />
      </div>
      <div className="flex  justify-center items-center">
        <Text1 texta="Educacion"
          textb="Pregrado en Ingeniería de Sistemas, Universidad de Antioquia
          Cursos de Codeacademy, Udemy, Platzi" />
      </div>

      <div className="flex  justify-center items-center flex-col">  
      
        <Info1 texta="University of Antioquia" textb="Student" textc="Pregrado Ingeniería de Sistemas"
          textd="Ingeniero de Sistemas, conocimientos en Desarrollo Web, Gestión de Proyectos, Arquitectura, entre otras áreas."
          fecha="June 2018 - Present" />

        
              </div>

        <div className="flex justify-center items-center">
        <Text1 texta="Portfolio"
          textb="Algunos de mis proyectos son:" />
      </div>

      <div className="mt-10">
        <Portafolio/>
      </div>

          
    </div>

  );
}