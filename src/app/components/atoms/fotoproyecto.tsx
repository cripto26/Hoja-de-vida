import Image from 'next/image'

export default function Fotoproyecto({ nombre }: { nombre: string }) {
  return (
    <div className="w-[450px] h-[450px] relative">
      <Image
        src={nombre}
        alt="Hamilton Daniel Quiroz Garces"
        layout='fill' // Esto hace que la imagen llene el contenedor
        objectFit='cover' // Esto ajustará la imagen para cubrir el área del contenedor manteniendo las proporciones
        // Si sabes las dimensiones exactas de las imágenes, es mejor usar width y height en lugar de layout='fill'
      />
    </div>
  );
}
