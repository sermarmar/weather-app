import { ReactNode } from "react"

interface Props {
    children: ReactNode
    size: string
}

export const Header = (props: Props) => {
    return (
        <>
            <h1 className={ `text-${props.size}xl` }>{ props.children }</h1>
        </>
    )
}