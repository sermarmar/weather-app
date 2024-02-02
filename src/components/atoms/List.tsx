import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import classNames from 'classnames';

interface Props {
    items: any[];
    handle?: ((value: string) => void) | undefined;
}

export const List = (props: Props) => {

    const { handle } = props;
    const classes = "py-2 px-4 hover:bg-bluedark-800 active:bg-bluedark-950 rounded-md transition-all cursor-pointer";

    const lists = () => {
        if(handle != undefined) {
            return (
                props.items.sort().map(value => (
                <li className={ classes } onClick={() => handle(value) }>
                    { value }
                </li>
            )))
        } else {
            return (
                props.items.sort().map(value => (
                <li className={ classes }>
                    { value }
                </li>
            )))
        }
    }

    return(
        <ul>{ lists() }</ul>
    )
}