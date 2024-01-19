import { MdLocationOn, MdOutlineMyLocation } from "react-icons/md"
import { Button } from "../components/atoms/Button"
import { weathers } from "../assets/json/weathers"
import { Image } from "../components/atoms/Image"
import Moment from "react-moment"
import { Header } from "../components/atoms/Text/Header"
import { Paragrahp } from "../components/atoms/Text/Paragrahp"

export const SidebarLayout = () => {

    let todayDate = new Date()

    return(
        <>
            <aside className="flex flex-col bg-bluedark h-screen w-96 py-12 px-10">
                <div className="flex flex-row justify-between">
                    <Button theme="gray">Buscar un lugar</Button>
                    <Button theme="gray" icon={ MdOutlineMyLocation }></Button>                 
                </div>
                <div className="mt-40 mb-20 px-10">
                     <Image name={ weathers.sol.name } image={ weathers.sol.image }/>
                </div>
                <div className="flex flex-row justify-center items-center text-center mb-20">
                    <Header size="9">15</Header>
                    <Paragrahp size="5" opacity>ºC</Paragrahp>
                </div>
                
                <div className="mb-10">
                    <Paragrahp align="center" style="bold" size="2">{ weathers.sol.name.toUpperCase() }</Paragrahp>
                </div>
                <div className="mb-2">
                    <Paragrahp align="center" opacity>Hoy - <Moment format="DD/MM/YYYY">{ todayDate }</Moment> </Paragrahp>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <MdLocationOn className="text-2xl opacity-70"/>
                    <Paragrahp align="center" opacity>San Bartolomé de Pinares</Paragrahp>
                </div>
            </aside>
        </>
    )

}

