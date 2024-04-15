import { Title } from "../atoms/text";

export default function Tarjeta1({ texta, textb, fecha }: { texta: string; textb: string, fecha: string }) {
    return (
        <div className="flex flex-col  w-[260px] ">
            <div>

            <Title text={texta} />
            </div>
           
               <div className="flex w-auto justify-center">

                <div className="flex mr-10 w-auto">
                    <p>{textb}</p>
                </div>
                <div className="flex text-xs bg-blue-500 justify-center items-center rounded-[2px] h-[20px] mt-1 ml-[-30px] w-auto ">
                    <p className="text-white text-15px">{fecha}</p>
                </div>
               </div>
            
        </div>



            );
}
