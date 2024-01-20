import { weathers } from "@/assets/json/weathers"
import Moment from "react-moment"
import { Card } from "../atoms/Card"
import { Image } from "../atoms/Image"
import { Paragrahp } from "../atoms/Text/Paragrahp"
import { FourthTitle } from "../atoms/Text/FourthTitle"

interface Props {
    day: number
}

export const WeatherCard = (props: Props) => {

    const FORMAT_DATE = "DD/MM/YYYY"
    let today = new Date()

    return (
        <Card>
            <div className="text-center">
                <FourthTitle><Moment format={ FORMAT_DATE } add={ {'days': props.day + 1} }>{ today }</Moment></FourthTitle>
            </div>
            <div className="flex justify-center my-6">
                <Image name={ weathers.nevando.name } image={ weathers.nevando.image } size="medium"/> 
            </div>
            
            <div className="flex flex-row gap-8 justify-center">
                <Paragrahp align="center" size="2">4ºC</Paragrahp>
                <Paragrahp align="center" size="2" opacity>-2ºC</Paragrahp>
            </div>
        </Card>
    )

}