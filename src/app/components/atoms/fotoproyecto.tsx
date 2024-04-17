import Image from 'next/image'

export default function Fotoproyecto({ nombre }: { nombre: string }) {
  return (
    <div className=" relative">
      <Image
        src={nombre}
        alt="proyecto"
        width={400} // Ancho deseado de la imagen
        height={400} // Altura deseada de la imagen
        
        />
    </div>
  );
}
