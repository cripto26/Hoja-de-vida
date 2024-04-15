    export default function Foto() {
    
        const photoURL = "/foto.png"
    
        return (
            <div className="w-[325px] h-[460px]">

            <img
            src={photoURL}
            alt="Hamilton Daniel Quiroz Garces"
            className="w-[325px] h-[460px] " 
            />
            </div>
            );
        }