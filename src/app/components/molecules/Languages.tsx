import { Title } from "../atoms/text";
import Barraporcentaje from "../atoms/barraporcentaje";


export default function Languages() {
    return (
      <div className="flex flex-col justify-center items-center  w-[300px] ">
       <div className="w-full">
      <Title text="Languages"/>
        </div> 
       <div className=" w-full justify-center items-center">
      <Barraporcentaje label="Spanish" porcentage={100}/>
      <Barraporcentaje label="English" porcentage={70}/>
        </div> 
      
      </div>
    );
  }
  