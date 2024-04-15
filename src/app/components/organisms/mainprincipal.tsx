import Main from "../molecules/main";
import Foto from "../atoms/foto";
export default function MainPrincipal() {

 
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center ">
      <div>
        <Main />
      </div>
      <div >
        <Foto/>
       
      </div>
    </div>
  );
}
