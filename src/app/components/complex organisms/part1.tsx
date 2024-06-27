import Minifoto from "../atoms/MiniFoto";
import Languages from "../molecules/Languages";
import ProgramminL from "../molecules/ProgrammingLanguages";
import Extraskills from "../molecules/Extraskills";
import Informacion from "../atoms/informacion";


export default function Part1() {
  // Asumiendo que tienes una URL a tu foto o un path relativo desde la carpeta 'public'
  const photoURL = "/foto1.png"

  return (
    <div className="  flex items-center flex-col justify-center max-w-[400px]">
        <div>

    <div className="ml-10 flex items-center flex-col justify-center  w-[300px]">
        <div className="flex justify-center items-center">
            <Minifoto/>
        </div>
        <div className="my-10 w-[300px]"> 
            <Informacion/>
        </div>
        <div className=" mt-10">
            <Languages/>
        </div>
        <div className=" mt-10">
            <ProgramminL/>
        </div>

        
        <div className=" mt-10 ml-10 fl w-full flex justify-start">
            <Extraskills/>
        </div>
      
    </div>
    
        </div>
    </div>

  );
}