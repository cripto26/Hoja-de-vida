import Icon from "../atoms/icon";
import {Title,Subtitle} from "../atoms/text";

export function Card({ text1,text2,text3 }: { text1: string, text2: string, text3: string, }) {
    return (
      <div className=" mx-10 w-auto hauto ">
        <Icon classExtra="my-10" icon={text1}/>
        <Title text={text2}/>
        <Subtitle subtitle={text3} classextra="text-center"/>
        
      </div>
    );
  }