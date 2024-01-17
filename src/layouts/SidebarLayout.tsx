import { MdOutlineMyLocation } from "react-icons/md"
import { Button } from "../components/Button"
import { weathers } from "../assets/json/weathers"
import { Image } from "../components/Image"

export const SidebarLayout = () => {

    return(
        <>
            <nav className="flex flex-col bg-bluedark h-screen w-96 py-12 px-10">
                <div className="flex flex-row justify-between">
                    {/* <div>
                        <button className="bg-gray-500 py-2 px-4 hover:bg-gray-400 active:bg-gray-600">Buscar un lugar</button>
                    </div> */}
                    <Button theme="gray">Buscar un lugar</Button>
                    <Button theme="gray" icon={ MdOutlineMyLocation }></Button>
                    
                </div>
                <div className="my-44 px-10">
                     <Image name={ weathers.sol.name } image={ weathers.sol.image }/>
                </div>
                
            </nav>
        </>
    )

}

