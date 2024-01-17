import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface Props {
    icon?: IconType
    children?: ReactNode
    theme?: "gray" | "blue"
    className?: string
}

export const Button = (props: Props) => {

    let classes = 'py-2 px-4'

    let colorButton = 'bg-white text-indigo-950'
    if (props.theme == 'blue') {
        colorButton = 'bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700'
    } else if(props.theme == 'gray') {
        colorButton = 'bg-gray-500 text-white hover:bg-gray-400 active:bg-gray-600'
    }

    if(props.children == undefined || props.children == '') {
        classes = 'py-2 px-2 rounded-full text-2xl'
    }

    classes += ` ${ props.className } ${ colorButton }`

    let text = props.children
    let content = props.icon != undefined ? ( <><props.icon /> {text}</> ) : text

    return(
        <>
            <div>
                <button className={ classes }>{ content }</button>
            </div>
        </>
    )



}