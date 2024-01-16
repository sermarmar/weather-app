import { SidebarLayout } from "./layouts/SidebarLayout"

export const WeatherApp = () => {
  return (
    <>
      <div className="bg-indigo-950 text-white h-screen">
        {/* Sidebar layout */}
        <SidebarLayout />
        {/* Content layout */}
      </div>
      
    </>
  )
}