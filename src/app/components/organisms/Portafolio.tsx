import Proyecto from "../molecules/proyecto";

export default function Portafolio () {
    return(
        <div className="flex flex-col sm:flex-row">
            <div className="mx-10">
            <Proyecto nombre="/avion.png" titulo="Prediccion precio del ticket de avion" link="https://github.com/cripto26/Prediccion_precio_de_ticket_de_avion"
            text="Este proyecto utiliza métodos de aprendizaje automático para predecir el precio de un ticket de avión con una precisión del 97,5%. Está diseñado para ayudar a las personas a planificar sus viajes con una mejor estimación de costos."/>

            </div>
            <div className="mx-10">
                <Proyecto nombre="/webshop.png" titulo="Web Shop" text="El proyecto cubre tanto el desarrollo frontend en React como el desarrollo backend en Spring Boot. Permite a los usuarios explorar productos, obtener información detallada, agregar artículos a un carrito de compras y contactar asesores directamente a través de WhatsApp." link="https://github.com/Veritax0/WebShopEmpresarial"/>
            </div>
            

        </div>
    )


}