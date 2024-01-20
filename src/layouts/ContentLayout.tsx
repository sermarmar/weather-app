import { WeatherCard } from "@/components/layouts/WeatherCard"
import { WeatherStatus } from "./WeatherStatus"

export const ContentLayout = () => {

    return (
        <>
            <div className="grid grid-flow-row gap-16 items-center">
                <div className="flex flex-row gap-10">
                    {
                        [...Array(5)].map((_, i) => <WeatherCard day={i}/>)
                    }
                </div>
                <WeatherStatus/>
            </div>
        </>
    )
}