import classNames from "classnames"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
    opacity?: boolean
}

export const FourthTitle = (props: Props) => {

    const classes = classNames('text-2xl', props.opacity ? 'opacity-70' : 'opacity-100');

    return (
        <>
            <h3 className={ classes }>{ props.children }</h3>
        </>
    )
}