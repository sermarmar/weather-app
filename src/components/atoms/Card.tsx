import classNames from "classnames"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
    fine?: boolean
}

export const Card = (props: Props) => {
    const frame = props.fine ? 'p-2' : 'px-4 py-8'

    const classes = classNames('w-auto bg-bluedark-950 flex-col', frame)

    return (
        <div className={ classes }>
            { props.children }
        </div>
    )
}