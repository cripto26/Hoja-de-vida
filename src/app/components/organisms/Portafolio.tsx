import Proyecto from "../molecules/proyecto";

export default function Portafolio () {
    return(
        <div className="flex flex-col sm:flex-row">
            <div className="mx-10">
            <Proyecto nombre="/avion.png" titulo="Prediccion precio del ticket de avion" link="https://github.com/cripto26/Modelos-1"
            text="This project uses machine learning methods to predict airline ticket prices with an accuracy of 97.5%. It is designed to help people plan their trips with better cost estimation."/>

            </div>
            <div className="mx-10">
                <Proyecto nombre="/webshop.png" titulo="Web Shop" text="The project covers both frontend development in React and backend development in Spring Boot. It allows users to explore products, get detailed information, add items to a shopping cart and contact advisors directly via WhatsApp." link="https://github.com/Veritax0/WebShopEmpresarial"/>
            </div>
            

        </div>
    )


}