interface Props {
    name: string,
    image: string,
    size?: 'auto' | string
}

export const Image = (props: Props) => {

    let loadImage = (image: string) => `/images/${image}`;
    let classes = `w-${props.size}`

    return(
        <>
            <img className={ classes } src={ loadImage(props.image) } alt={ props.name } />
        </>
    )

}