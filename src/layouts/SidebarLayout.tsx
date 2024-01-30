import { weathers } from "@/assets/json/weathers"
import { Button } from "@/components/atoms/Button"
import { Image } from "@/components/atoms/Image"
import { Paragrahp } from "@/components/atoms/Text/Paragrahp"
import { ThirdTitle } from "@/components/atoms/Text/ThirdTitle"
import { Title } from "@/components/atoms/Text/Title"
import { useState } from "react"
import { MdLocationOn, MdOutlineMyLocation } from "react-icons/md"
import Moment from "react-moment"
import { LocationLayout } from "./LocationLayout"

export const SidebarLayout = () => {

    const [location, setLocation] = useState('Móstoles')
    const [open, setOpen] = useState(false)
    let todayDate = new Date()

    const handleOpen = (opened: boolean) => {
        setOpen(opened)
    }

    const handleLocation = (location: string) => {
        setLocation(location);
    }

    return(
        <>
            <div className="grid grid-flow-col sticky top-0 overflow-hidden h-screen">
                <aside className="flex flex-col bg-bluedark-950  w-96 py-12 px-10">
                    <div className="flex flex-row justify-between">
                        <Button theme="gray" onClick={() => handleOpen(true) }>Buscar un lugar</Button>
                        <Button theme="gray" icon={ MdOutlineMyLocation }></Button>                 
                    </div>
                    <div className="mt-40 mb-20 px-10">
                        <Image name={ weathers.sol.name } image={ weathers.sol.image }/>
                    </div>
                    <div className="flex flex-row justify-center items-center text-center mb-20">
                        <Title>15</Title>
                        <ThirdTitle opacity>ºC</ThirdTitle>
                    </div>
                    
                    <div className="mb-10">
                        <Paragrahp align="center" style="bold" size="2">{ weathers.sol.name.toUpperCase() }</Paragrahp>
                    </div>
                    <div className="mb-2">
                        <Paragrahp align="center" opacity>Hoy - <Moment format="DD/MM/YYYY">{ todayDate }</Moment> </Paragrahp>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-2">
                        <MdLocationOn className="text-2xl opacity-70"/>
                        <Paragrahp align="center" opacity>{ location }</Paragrahp>
                    </div>
                </aside>
                <LocationLayout status={ open } action={ (value: boolean) => handleOpen(value) } addLocation={ handleLocation }/> 
            </div>
            
        </>
    )

}

