import { MdOutlineMyLocation } from "react-icons/md"

export const SidebarLayout = () => {
    return(
        <>
            <nav className="flex flex-col bg-bluedark h-screen w-96 py-12 px-10">
                <div className="flex flex-row justify-between">
                    <div>
                        <button className="bg-gray-500 py-2 px-4 hover:bg-gray-400 active:bg-gray-600">Buscar un lugar</button>
                    </div>
                    <div>
                        <button className="bg-gray-500 py-2 px-2 rounded-full text-2xl hover:bg-gray-400 active:bg-gray-600"><MdOutlineMyLocation /></button>
                    </div>
                    
                </div>
                
            </nav>
        </>
    )
}