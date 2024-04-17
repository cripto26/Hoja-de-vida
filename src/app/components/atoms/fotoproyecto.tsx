import Image from 'next/image'

export default function Fotoproyecto({ nombre }: { nombre: string }) {
  return (
    <div className=" relative">
      <Image
        src={nombre}
        alt="proyecto"
        width={450} // Ancho deseado de la imagen
        height={450} // Altura deseada de la imagen
        
        />
    </div>
  );
}
