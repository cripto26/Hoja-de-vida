import { Card } from "../molecules/card";
import { Title, Subtitle } from "../atoms/text";

export function Cartilla() {
    return (

        <div className="flex flex-col w-auto h-auto border my-20 ">

            <div className='flex flex-col  sm:flex-row border  '      >

                <Card text1="/1.png"
                    text2="Web Development" text3="Blog, E-Commerce" />

                <Card text1="/2.png"
                    text2="Agile Methodologies" text3="Blog, Scrum, Kanban, Agilism
                    " />

                <Card text1="/3.png"
                    text2="Linux Server" text3="Knowledge in deployment, configuration and maintenance of Linux servers, optimizing and improving their performance." />

            </div >
            <div className="flex flex-col sm:flex-row    mt-[40px] " >

            <Card text1="/4.png"
                    text2="Machine Learning" text3="Fundamental knowledge in machine learning, including supervised and unsupervised learning algorithms, data preprocessing techniques, and model evaluation" />

            <Card text1="/5.png"
                    text2="Mobile application development for Android" text3="Experience in developing mobile applications for the Android platform." />

                <div className=" sm:ml-[50px] w-auto sm:max-w-[260px] flex flex-col  justify-center items-center ">
                    <div className="my-10 sm:mr-[40px] ">
                        <Title text="Advertising" />
                    </div>
                    <div className=" flex justify-center items-center flex-col sm:mr-[40px] ">
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