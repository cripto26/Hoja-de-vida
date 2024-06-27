import { Subtitle } from "../atoms/text";
import Button from "../atoms/Boton";

export default function Main() {
  // Asumiendo que tienes una URL a tu foto o un path relativo desde la carpeta 'public'
  const photoURL = "/foto.png"

  return (
    <div>

      <div className="flex flex-col justify-center items-center  h-auto max-w-[500px]">
        <div className="flex mb-10 ">
          <h1 className="text-5xl font-bold"> I&apos;m Daniel Quiroz <span className="text-gradient text-blue-500">Front-end Developer</span></h1>
        </div>
        <div className="">
          <Subtitle subtitle="Soy estudiante de ultimo semestre de ingeniería de sistemas en la universidad de Antioquia, apasionado por el desarrollo web y la inteligencia artificial, con diversas habilidades como el liderazgo y comunicación asertiva con las cuales fortalesco los entornos de trabajo colaborativos. A lo largo de mi carrera profesional he adquirido también compromiso, disciplina y curiosidad por aprender acerca de las nuevas tecnologías, para así crear proyectos que ayuden a solucionar problemas que se encuentran en el día a día."
            classextra="" />
        </div>
        <div className="flex mt-10 justify-start w-full">
          <Button />
        </div>
      </div>
    </div>

  );
}
