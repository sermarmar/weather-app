import Moment from "react-moment"
import { Header } from "../atoms/Text/Header"
import { Paragrahp } from "../atoms/Text/Paragrahp"
import { Image } from "../atoms/Image"
import { weathers } from "../../assets/json/weathers"
import { Card } from "../atoms/Card"

interface Props {
    day: number
}

export const WeatherCard = (props: Props) => {

    const FORMAT_DATE = "DD/MM/YYYY"
    let today = new Date()

    return (
        <Card side={ 4 } medial={ 8 }>
            <div className="text-center">
                <Header size="2"><Moment format={ FORMAT_DATE } add={ {'days': props.day + 1} }>{ today }</Moment></Header>
            </div>
            <div className="flex justify-center my-6">
                <Image name={ weathers.nevando.name } image={ weathers.nevando.image } size="8/12"/> 
            </div>
            
            <div className="flex flex-row gap-8 justify-center">
                <Paragrahp align="center" size="2">4ºC</Paragrahp>
                <Paragrahp align="center" size="2" opacity>-2ºC</Paragrahp>
            </div>
        </Card>
    )

}