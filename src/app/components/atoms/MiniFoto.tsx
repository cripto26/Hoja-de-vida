import { Title, Subtitle } from "./text";

export default function Minifoto() {
  
  const photoURL = "/foto1.png"

  return (
    <div className="bg  flex flex-col justify-center items-center" >
      <div>
       
        <img
          src={photoURL}
          alt="Hamilton Daniel Quiroz Garces"
          className="rounded-full w-32 h-32 object-cover" 
        />
      </div>
      <div className="flex mt-4">
        <Title text="Hamilton Daniel Quiroz Garces" />
      </div>
      <div className="flex mt-5">
        <Subtitle classextra="text-center" subtitle="Junior (Frontend developer, UI designer, Data analyst, Data scientist)" />
      </div>
    </div>
  );
}
