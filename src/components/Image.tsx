interface Props {
    name: string,
    image: string
}

export const Image = (props: Props) => {

    let loadImage = (image: string) => `/images/${image}`;

    return(
        <>
            <img src={ loadImage(props.image) } alt={ props.name } />
        </>
    )

}