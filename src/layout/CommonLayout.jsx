import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const CommonLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default CommonLayout
