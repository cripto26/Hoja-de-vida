import Image from 'next/image';

export default function Foto() {
  const photoURL = "/foto.png";

  return (
    <div className="relative w-[325px] h-[460px]">
      <Image
        src={photoURL}
        alt="Hamilton Daniel Quiroz Garces"
        layout="fill" // Utiliza las dimensiones del elemento padre
        objectFit="cover" // Esto asegurará que la imagen cubra completamente el div y se escale adecuadamente
        // Si tienes dimensiones estáticas, es mejor usarlas directamente en lugar de layout='fill'
      />
    </div>
  );
}
