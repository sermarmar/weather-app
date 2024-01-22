import { Button } from "@/components/atoms/Button"
import { InputSearch } from "@/components/atoms/Inputs/InputSearch"
import classNames from "classnames"
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"

interface Props{
    status: boolean
    action?: any
}

export const LocationLayout = ({ status, action }: Props) => {
    const [animationStatus, setAnimationStatus] = useState(status);

    useEffect(() => {
        setAnimationStatus(status);
    }, [status]);

    let classes = classNames('flex flex-col gap-8 bg-bluedark-900 overflow-hidden h-screen w-96 py-8 px-10 absolute top-0 transition-all duration-300 ', {
        '-left-96': !animationStatus,
        'left-0': animationStatus
    });
    
    const handleClose = () => {
        action(false)
    };

    return(
        <>
            <aside className={ classes }>
                <div className="flex justify-end">
                    <IoMdClose className="text-4xl" onClick={ handleClose }/>
                </div>
                <div className="flex flex-row gap-5 justify-between">
                    <InputSearch/>
                    <Button theme="blue">Buscar</Button>                 
                </div>
            </aside>
        </>
    )
}