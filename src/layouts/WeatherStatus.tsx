import { ThirdTitle } from "@/components/atoms/Text/ThirdTitle"
import { AirPressureCard } from "@/components/templates/weatherStatus/AirPressureCard"
import { HumidityCard } from "@/components/templates/weatherStatus/HumidityCard"
import { VisibilityCard } from "@/components/templates/weatherStatus/VisibilityCard"
import { WindStatusCard } from "@/components/templates/weatherStatus/WindStatusCard"

export const WeatherStatus = () => {
    
    return(
        <>
            <ThirdTitle>Lo más destacado de hoy</ThirdTitle>
            <div className="grid grid-cols-2 gap-16">
                <WindStatusCard/>
                <HumidityCard/>
                <VisibilityCard/>
                <AirPressureCard/>
            </div>
        </>
        
    )
    

}