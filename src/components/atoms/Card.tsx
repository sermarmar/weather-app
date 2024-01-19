import { ReactNode } from "react"

interface Props {
    children: ReactNode
    side?: number
    medial?: number
}

export const Card = (props: Props) => {
    
    const side = `px-${props.side}`
    const medial = `py-${props.medial}`

    const classes = `w-auto bg-bluedark flex-col ${side} ${medial}`

    return (
        <div className={ classes }>
            { props.children }
        </div>
    )
}