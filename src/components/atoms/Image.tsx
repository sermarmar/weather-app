interface Props {
    name: string,
    image: string,
    size?: '' | 'big' | 'medium' | 'small'
}

export const Image = (props: Props) => {

    let loadImage = (image: string) => `/images/${image}`;
    let size = ''
    switch(props.size){
        case 'big':
            size = 'w-8/12'
            break;
        case 'medium':
            size = 'w-6/12'
            break;
        case 'small':
            size = 'w-2/12'
            break;
        default: 
            size = 'w-auto'
            break;
    }

    let classes = size

    return(
        <>
            <img className={ classes } src={ loadImage(props.image) } alt={ props.name } />
        </>
    )

}