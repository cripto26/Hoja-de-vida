import { Subtitle } from "./text";

export default function Skill({ icon, text }: { icon: string; text: string }) {
    return (
    <div className="flex flex-row mb-2">

      <div className='h-17 w-17  flex justify-center items-center  bg-transparent'>
        <i className={`text-white w-17 h-17 flex justify-center items-center `}>
          <svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' viewBox='0 0 24 24'>
            <path fill='black' d={icon} />
          </svg>
        </i>
      </div>
      <div className="flex ml-10 items-center">
        <Subtitle subtitle={text} classextra="text-center"/>
      </div>
    </div>
    );
  }