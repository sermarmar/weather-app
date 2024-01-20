import { ReactNode } from "react"

interface Props {
    children: ReactNode,
    size?: string,
    align?: 'left' | 'center' | 'right',
    style?: 'bold' | 'italic' | 'underline'
    opacity?: boolean
}

export const Paragrahp = (props: Props) => {
    let theme = ''
    let opacity = props.opacity ? 'opacity-70' : ''
    let align = props.align != null ? `text-${props.align}` : ''
    let size = props.size != null ? `text-${props.size}xl` : ''
    let style = props.style != null ? `font-${props.style}` : ''

    theme += `${opacity} ${align} ${size} ${style}`.trim()

    return (
        <>
            <p className={ theme }>{ props.children }</p>
        </>
    )
}