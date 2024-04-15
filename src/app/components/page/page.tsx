import Part1 from "../complex organisms/part1";
import Part2 from "../complex organisms/part2";
import Links from "../molecules/links";

export default function Page() {
    return (
        <div className="flex flex-col sm:flex-row  w-screen justify-center ">
            <div  >
                <Part1/>
            </div>
            <div className=" w-full" >
                <Part2/>
            </div>
            <div className=" w-full">
                <Links/>
            </div>
        </div>
    );
}