import { ThirdTitle } from "@/components/atoms/Text/ThirdTitle"
import { AirPressureCard } from "@/components/layouts/weatherStatus/AirPressureCard"
import { HumidityCard } from "@/components/layouts/weatherStatus/HumidityCard"
import { VisibilityCard } from "@/components/layouts/weatherStatus/VisibilityCard"
import { WindStatusCard } from "@/components/layouts/weatherStatus/WindStatusCard"

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