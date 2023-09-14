import { Outlet } from "react-router-dom"
import DashHeader from "../components/DashHeader"
import SettingsNav from "../components/SettingsNav"

export default function Settings(){
    return(
        <main className="p-6">
            <DashHeader title={'Settings'} />
            <SettingsNav/>
            <Outlet/>
        </main>
    )
}