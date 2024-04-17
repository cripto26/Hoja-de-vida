import { Title, Subtitle } from "../atoms/text";
import Fotoproyecto from "../atoms/fotoproyecto";

export default function Proyecto({ nombre, titulo, text, link }: { nombre: string, titulo: string, text: string, link:string}) {

    return (
        <div className="flex flex-col w-auto  justify-center items-center">
            <div>

                <Fotoproyecto nombre={nombre} />
            </div>
            <div className="mt-5 ">
                <Title text={titulo} />
            </div>
            <div className="flex mt-5 w-auto justify-center items-center max-w-[350px] ">
                <Subtitle subtitle={text} classextra=" text-center" />
            </div>
            <div>
                <p className="text-blue-500">
                    <a href={link} target="_blank" rel="noopener noreferrer">Learn more</a>
                </p>
            </div>

        </div>


    );
}
