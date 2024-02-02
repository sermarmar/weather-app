import { Card } from "@/components/atoms/Card"
import { Paragrahp } from "@/components/atoms/Text/Paragrahp"
import { Subtitle } from "@/components/atoms/Text/Subtitle"

export const HumidityCard = () => {
    return(
        <Card>
            <div className="text-center flex flex-col gap-6">
                <Paragrahp size="2">Humedad</Paragrahp>
                <Subtitle>7mph</Subtitle>
                {/*Icon*/} <Paragrahp size="2">WSW</Paragrahp>
            </div>
        </Card>
    )
}