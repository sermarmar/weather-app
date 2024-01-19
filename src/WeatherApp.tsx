import { ContentLayout } from "./layouts/ContentLayout"
import { SidebarLayout } from "./layouts/SidebarLayout"

export const WeatherApp = () => {
  return (
    <>
      <div className="bg-indigo-950 text-white h-screen grid grid-flow-col">
        {/* Sidebar layout */}
        <div className="col-span-1">
          <SidebarLayout />
        </div>
        {/* Content layout */}
        <div className="col-span-11 m-20">
          <ContentLayout />
        </div> 
      </div>
      
    </>
  )
}