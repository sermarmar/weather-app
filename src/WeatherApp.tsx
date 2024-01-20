import { ContentLayout } from "./layouts/ContentLayout"
import { SidebarLayout } from "./layouts/SidebarLayout"

export const WeatherApp = () => {
  return (
    <>
      <div className="bg-indigo-950 text-white grid grid-flow-col min-h-screen">
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