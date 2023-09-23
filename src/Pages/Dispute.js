import { BsBoxArrowUp } from "react-icons/bs";
import DashHeader from "../components/DashHeader";
import DashboardCard from "../components/OverviewCard";
import MenuSelect from "../components/MenuSelect";
import { DataGrid } from '@mui/x-data-grid';


export default function Dispute(){
    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'id', headerName: 'User ID', width: 100 },
        { field: 'role', headerName: 'User role', width: 100 },
        { field: 'reportTime', headerName: 'Report Time', width: 150 },
        { field: 'reportDate', headerName: 'Report Date', width: 150 },
        { field: 'subject', headerName: 'Subject', width: 150 },
        { field: 'status', headerName: 'Status', width: 150 }
    ];
    const rows = [
        { name: "Joy Hector", id: "2748173", role: 'Traveller', amount: 2460, reportTime:"2:56 AM", reportDate : "Nov 11, 2022", subject:"Deposit", status : "Completed"},
        { name: "Enyonam Ade", id: "1037629", role: 'Sender', amount: 23560, reportTime:"4:20 PM", reportDate : "Feb 15, 2022", subject:"Deposit", status : "In review"},
        { name: "Etim Okon", id: "7352092", role: 'Sender', amount: 12400, reportTime:"3:49 PM", reportDate : "Jun 23, 2022", subject:"Withdrawal", status : "In review"},
        { name: "Bola Ahmed", id: "0946248", role: 'Traveller',  amount : 56000, reportTime:"7:30 AM", reportDate : "Sept 19, 2022", subject:"Paid", status : "Completed"},
        { name: "Franka Igurma", id: "8973623", role: 'Sender',  amount : 2000, reportTime:"6:15 PM", reportDate : "Jan 30, 2022", subject:"Paid", status : "In review"}
    ];
    return(
        <main className="p-6">
            <DashHeader title={'Dashboard'} />
            <section className="grid grid-cols-3 gap-6">
                <DashboardCard title="Total Dispute" amount="3"/>
                <DashboardCard title="Pending Dispute" amount="1"/>
                <DashboardCard title="Total Solved" amount="2"/>
            </section>
            <div className="mt-10 mb-5 flex justify-between">
                <div className="flex items-center gap-2 font-bold">
                    <p>
                        Sort by
                    </p>
                    <MenuSelect optionArray={["Today", "Last 7 Days", "Last Week"]}/>
                </div>
                <button className="text-white bg-black flex gap-2 items-center px-6">
                    <BsBoxArrowUp/>
                    <p>Export</p>
                </button>
            </div> 
            <section>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </section>
        </main>
    )
}