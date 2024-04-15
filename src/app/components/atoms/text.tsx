
export function Title({ text }: { text: string }) {
    return (
 

            <h1 className={`font-inter font-medium text-[18px] leading-[22px] text-center text-black 
                      sm:w-auto sm:h-auto sm:mt-0 sm:ml-0 `}>
                {text}
            </h1>
        
    );
}


export function Subtitle({ subtitle, classextra }: { subtitle: string, classextra: string }) {
    return (
        <h2 className={`font-inter font-medium text-[15px] leading-[22px] ${classextra} text-gray-500 align-middle w-auto sm:w-auto sm:h-auto sm:mt-0 sm:ml-0`}>
            {subtitle}
        </h2>
    );
}
