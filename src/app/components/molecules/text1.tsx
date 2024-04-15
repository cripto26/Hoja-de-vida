import { Subtitle } from "../atoms/text";

export default function Text1({ texta, textb }: { texta: string; textb: string }) {
    return (
        <div className="flex flex-col justify-center items-center w-[450px] h-auto ">
            <div className="flex mb-10 ">
                
                <h1 className="text-[32px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">{texta}</h1>
            </div>
            <Subtitle subtitle={textb} classextra="text-center" />
        </div>
    );
}
