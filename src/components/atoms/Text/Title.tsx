import classNames from "classnames"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
    opacity?: boolean
}

export const Title = (props: Props) => {

    const classes = classNames('text-9xl', props.opacity ? 'opacity-70' : 'opacity-100');

    return (
        <>
            <h1 className={ classes }>{ props.children }</h1>
        </>
    )
}