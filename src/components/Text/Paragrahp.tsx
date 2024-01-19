import { ReactNode } from "react"

interface Props {
    children: ReactNode,
    size?: string,
    align?: 'left' | 'center' | 'right',
    style?: 'bold' | 'italic' | 'underline'
}

export const Paragrahp = (props: Props) => {
    let theme = 'opacity-70'
    let align = props.align != null ? `text-${props.align}` : null
    let size = props.size != null ? `text-${props.size}xl` : null
    let style = props.style != null ? `font-${props.style}` : null

    theme += ` ${align} ${size} ${style}`

    return (
        <>
            <p className={ theme }>{ props.children }</p>
        </>
    )
}