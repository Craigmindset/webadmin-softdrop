import DashHeader from "../components/DashHeader";
import DashboardCard from "../components/OverviewCard";
import Naira from "../assets/Naira";
import PieChart from "../components/DashboardComponents/PieChart";
import BarChart from "../components/DashboardComponents/BarChart";
import LineChartSection from "../components/DashboardComponents/LineChartSection";


export default function Dashboard() {
    return (
        <main className="p-6">
            <DashHeader title={'Dashboard'} />
            <section className="grid grid-cols-3 gap-6">
                <DashboardCard title="Total Senders" percentage={2.5} amount="10,567" />
                <DashboardCard title="Total Travelers" percentage={-4.4} amount="8,245" />
                <DashboardCard title="Total Income" percentage={2.5} naira={<Naira />} amount="45,240,750,000" />
            </section>
            <div>
                <LineChartSection />
            </div>
            <div className="mt-10 grid grid-cols-[1fr_1fr] gap-4">
                <BarChart />
                <PieChart />
            </div>
        </main>
    )
}