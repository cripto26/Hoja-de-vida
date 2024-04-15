import { Title } from "../atoms/text";
import Barraporcentaje from "../atoms/barraporcentaje";


export default function ProgramminL() {
    return (
      <div className="w-[300px]">
       <div className="w-full">
      <Title text="Programming Languages"/>
        </div>
       <div className=" w-full">
      <Barraporcentaje label="HTML" porcentage={80}/>
      <Barraporcentaje label="Python" porcentage={80}/>
      <Barraporcentaje label="CSS" porcentage={80}/>
      <Barraporcentaje label="React" porcentage={60}/>
      <Barraporcentaje label="Javascript" porcentage={80}/>
        </div>  
      
      </div>
    );
  }
  