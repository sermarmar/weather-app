import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Header = (props: Props) => {
    return (
        <>
            <h1 className="text-9xl">{ props.children }</h1>
        </>
    )
}