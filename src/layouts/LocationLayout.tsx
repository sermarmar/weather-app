import { Button } from "@/components/atoms/Button"
import { InputText } from "@/components/atoms/Inputs/InputText"
import { List } from "@/components/atoms/List"
import classNames from "classnames"
import { FormEvent, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"

interface Props{
    status: boolean
    addLocation: (value: string) => void
    action?: any
}

export const LocationLayout = ({ status, addLocation, action }: Props) => {
    
    const [animationStatus, setAnimationStatus] = useState(status);
    const [locations,  setLocations] = useState<string[]>([]);
    const [location, setLocation] = useState('');

    useEffect(() => {
        setAnimationStatus(status);
    }, [status]);

    let classes = classNames('flex flex-col gap-8 bg-bluedark-900 overflow-hidden h-screen w-96 py-8 px-10 absolute top-0 transition-all duration-300 ', {
        '-left-96': !animationStatus,
        'left-0': animationStatus
    });
    
    const handleClose = () => {
        action(false);
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLocations( [location, ...locations] );
        setLocation('');
    }

    const handleSelectLocation = (item: string) => {
        addLocation(item);
        action(false);
    }

    return(
        <>
            <form onSubmit={ (event) => onSubmit(event) }>
                <aside className={ classes }>
                    <div className="flex justify-end">
                        <IoMdClose className="text-4xl" onClick={ handleClose }/>
                    </div>
                    <div className="flex flex-row gap-5 justify-between">
                        <InputText label="Location" onChange={ setLocation } value={ location }/>
                        <Button theme="blue">Buscar</Button>                 
                    </div>
                    <List items={ locations } handle={ handleSelectLocation }/>
                </aside>
            </form>
        </>
    )
}