
import { Title, Subtitle } from "../atoms/text";
import Image from 'next/image';

export function Card({ text1, text2, text3 }: { text1:string, text2: string, text3: string }) {
  
  return (
    <div className=" mx-10 my-10 w-auto h-auto flex flex-col justify-center items-center ">
      <div className="my-5">

      <Image
        src={text1}
        alt="Hamilton Daniel Quiroz Garces"
        width={68} // Ancho deseado de la imagen
        height={68} // Altura deseada de la imagen
        objectFit="cover" // O 'contain' si no quieres que la imagen se recorte
        />
        </div>

      <Title text={text2} />
      <div className=" w-[320px] h-auto my-5">

      <Subtitle subtitle={text3} classextra="text-center" />
      </div>

    </div>
  );
}