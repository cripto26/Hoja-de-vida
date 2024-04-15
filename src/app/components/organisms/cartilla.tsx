import { Card } from "../molecules/card";
import { Title, Subtitle } from "../atoms/text";

export function Cartilla() {
    return (

        <div className="flex flex-col w-auto h-auto ">

            <div className="flex flex-col sm:flex-row  w-auto"      >
                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

            </div>
            <div className="flex flex-col sm:flex-row  w-auto">

                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <Card text1="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <div className=" mx-10 max-w-[260px] ">
                    <div className="my-10 mr-30 ">
                        <Title text="Advertising" />
                    </div>
                    <div className=" flex justify-center items-center flex-col">
                        <Subtitle classextra="text-center" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. " />
                        <p className="text-blue-500">
                    <a href="" target="_blank" rel="noopener noreferrer">Learn more</a>
                </p>
                    </div>
                </div>

            </div>


        </div>
    );
}