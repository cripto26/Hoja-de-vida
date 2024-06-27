import { Card } from "../molecules/card";
import { Title, Subtitle } from "../atoms/text";

export function Cartilla() {
    return (

        <div className="flex flex-col w-auto h-auto  my-20 ">

            <div className='flex flex-col  sm:flex-row   '      >

                <Card text1="/1.png"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <Card text1="/2.png"
                    text2="Agile Methodologies" text3="Blog, Scrum, Kanban, Agilism
                    " />

                <Card text1="/3.png"
                    text2="Linux Server" text3="Conocimientos en despliegue, configuración y mantenimiento de servidores Linux." />

            </div >
            <div className="flex flex-col sm:flex-row    mt-[40px] " >

            <Card text1="/4.png"
                    text2="Machine Learning" text3="Conocimientos fundamentales en aprendizaje automático, incluidos algoritmos de aprendizaje supervisados ​​y no supervisados, técnicas de preprocesamiento de datos y evaluación de modelos." />

            <Card text1="/5.png"
                    text2="Mobile application development for Android" text3="Experiencia en desarrollo de aplicaciones móviles para la plataforma Android.." />

                

            </div>


        </div>
    );
}