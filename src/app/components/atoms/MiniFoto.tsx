import Image from 'next/image';
import { Title, Subtitle } from "./text";

export default function Minifoto() {
  
  const photoURL = "/foto1.png"

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="rounded-full w-32 h-32 relative">
        <Image
          src={photoURL}
          alt="Hamilton Daniel Quiroz Garces"
          layout='fill' // Utiliza el espacio del contenedor
          objectFit='cover' // Mantiene las proporciones y cubre el espacio del contenedor
          className="rounded-full" // Mantiene la imagen redondeada
        />
      </div>
      <div className="flex mt-4">
        <Title text="Hamilton Daniel Quiroz Garces" />
      </div>
      <div className="flex mt-5">
        <Subtitle classextra="text-center" subtitle="Desarrollador Web, UI designer, Estudiante de Data analyst" />
      </div>
    </div>
  );
}
