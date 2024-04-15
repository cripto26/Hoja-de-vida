import Mainprincipal from "../organisms/mainprincipal";
import Text1 from "../molecules/text1";
import { Cartilla } from "../organisms/cartilla";
import Info1 from "../organisms/info";
import Portafolio from "../organisms/Portafolio";

export default function Part2() {


  return (
   

    <div className="  w-auto h-auto justify-center items-center ml-40 mr-40  flex flex-col ">
      <div>
        <Mainprincipal />
      </div>
      <div className="flex justify-center items-center">
        <Text1 texta="My Knowledge"
          textb="This section shows the knowledge and skills that I have learned throughout my university training, as well as knowledge obtained through work experience." />
      </div>

      <div className="flex justify-center items-center">
        <Cartilla />
      </div>
      <div className="flex  justify-center items-center">
        <Text1 texta="Education"
          textb="This section shows the knowledge and skills that I have learned throughout my university training, as well as knowledge obtained through work experience." />
      </div>

      <div className="flex  justify-center items-center flex-col">  
      
        <Info1 texta="University of Antioquia" textb="Student" textc="Systems Engineering Degree"
          textd="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          fecha="June 2018 - Present" />

        <Info1 texta="Programming Course" textb="Student" textc="Certificate of web training"
          textd="The Systems Engineering program focuses on researching and applying knowledge to develop innovative solutions in physical and abstract systems. Students acquire skills in areas such as software development and systems management, preparing them to face today's technological challenges."
          fecha="October 2022 - December 2022
          "/>
        "       </div>

        <div className="flex justify-center items-center">
        <Text1 texta="Portfolio"
          textb="My most important projects are:" />
      </div>

      <div className="mt-10">
        <Portafolio/>
      </div>

          
    </div>

  );
}