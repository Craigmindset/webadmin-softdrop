import Naira from "../assets/Naira"
import DashHeader from "../components/DashHeader"
import DashboardCard from "../components/OverviewCard"
import { DataGrid } from '@mui/x-data-grid';


export default function Travellers(){
    // Dummy data for table
    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'id', headerName: 'User ID', width: 100 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
        { field: 'signUpDate', headerName: 'Sign Up Date', width: 150 },
        { field: 'orderCompleted', headerName: 'Order Completed', width: 150 },
        { field: 'status', headerName: 'Status', render : (row) => console.log(row) ,width: 200 },
      ];
      const rows = [
        { name: "Joy Hector", id: "2748173", email: 'joy@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Nov 11, 2022", orderCompleted : 7, status : "Active"},
        { name: "Enyonam Ade", id: "1037629", email: 'ade@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Feb 15, 2022", orderCompleted : 20, status : "Suspended"},
        { name: "Etim Okon", id: "7352092", email: 'etim@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Jun 23, 2022", orderCompleted : 24, status : "Blocked"},
        { name: "Bola Ahmed", id: "0946248", email: 'ahmed@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Sept 19, 2022", orderCompleted : 30, status : "Active"},
        { name: "Franka Igurma", id: "8973623", email: 'igurma@anymail.com',  phoneNumber : "+243908754232", signUpDate : "Jan 30, 2022", orderCompleted : 15, status : "Suspended"}
      ];

    return (
        <main className="p-6">
            <DashHeader title={'Travellers'} />
            <section className="grid grid-cols-3 gap-6 mb-10">
                <DashboardCard title="Delivery Completed" amount="8,950"/>
                <DashboardCard title="Delivery Canceled" amount="10"/>
                <DashboardCard title="Total Paid" naira={<Naira/>} amount="3,120,000.00"/>
            </section>
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