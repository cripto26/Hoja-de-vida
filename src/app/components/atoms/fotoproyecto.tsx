export default function Fotoproyecto({nombre}:{nombre:string}) {

    
    return (
        <div className="w-[450px] h-[450px] ">

        <img
        src={nombre}
        alt="Hamilton Daniel Quiroz Garces"
        className="w-[450px] h-[450px] " 
        />
        </div>
        );
    


}