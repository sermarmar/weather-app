
interface Props{
    label: string;
    onChange?: (value: string) => void;
    value: string;
}

export const InputText = ({ label, onChange, value }: Props) => {

    return(
        <div className="relative h-10 w-full min-w-[200px]">
            <input type="text" value={ value } onChange={ (e) => onChange && onChange(e.target.value) } id="floating_outlined" className="block px-3 py-1.5 h-full w-full bg-transparent border border-1 border-gray-100 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-bluedark-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{ label }</label>
        </div>
    )
}