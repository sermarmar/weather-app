import { Header } from "../components/atoms/Text/Header"
import { WeatherCard } from "../components/layouts/WeatherCard"

export const ContentLayout = () => {

    return (
        <>
            <div className="grid grid-flow-row items-center">
                <div className="flex flex-row gap-10">
                    {
                        [...Array(5)].map((_, i) => <WeatherCard day={i}/>)
                    }
                </div>
                <Header size="6">Lo más destacado de hoy</Header>
            </div>
        </>
    )
}