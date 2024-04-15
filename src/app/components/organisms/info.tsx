import Tarjeta1 from "../molecules/tarjeta1";
import Tarjeta2 from "../molecules/tarjeta2";

export default function Info1({ texta, textb, textc, textd, fecha }: { texta: string, textb: string, textc: string, textd: string, fecha: string }) {
    return (
        <div className="flex flex-col sm:flex-row my-20  w-auto h-auto ">
            <div className="mr-28  w-auto">

                <Tarjeta1 texta={texta} textb={textb} fecha={fecha} />
            </div>
            <div className="">

                <Tarjeta2 texta={textc} textb={textd} />
            </div >
        </div>
    );
}
