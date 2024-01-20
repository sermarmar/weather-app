import classNames from "classnames"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
    opacity?: boolean
}

export const Subtitle = (props: Props) => {

    const classes = classNames('text-7xl', props.opacity ? 'opacity-70' : 'opacity-100');

    return (
        <>
            <h2 className={ classes }>{ props.children }</h2>
        </>
    )
}