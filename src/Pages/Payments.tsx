import Naira from "../assets/Naira";
import DashHeader from "../components/DashHeader";
import DashboardCard from "../components/OverviewCard";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

interface PaymentRow {
  name: string;
  id: string;
  role: string;
  amount: number;
  transactionTime: string | Date;
  transactionDate: string;
  description: string;
  status: string;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "id", headerName: "User ID", width: 100 },
  { field: "role", headerName: "User role", width: 100 },
  { field: "amount", headerName: "Amount", width: 150 },
  { field: "transactionTime", headerName: "Transaction Time", width: 150 },
  { field: "transactionDate", headerName: "Transaction Date", width: 150 },
  { field: "description", headerName: "Description", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

const rows: PaymentRow[] = [
  {
    name: "Joy Hector",
    id: "2748173",
    role: "Traveller",
    amount: 2460,
    transactionTime: "2:56 AM",
    transactionDate: "Nov 11, 2022",
    description: "Deposit",
    status: "Completed",
  },
  {
    name: "Enyonam Ade",
    id: "1037629",
    role: "Sender",
    amount: 23560,
    transactionTime: "4:20 PM",
    transactionDate: "Feb 15, 2022",
    description: "Deposit",
    status: "Blocked",
  },
  {
    name: "Etim Okon",
    id: "7352092",
    role: "Sender",
    amount: 12400,
    transactionTime: new Date(),
    transactionDate: "Jun 23, 2022",
    description: "Withdrawal",
    status: "Blocked",
  },
  {
    name: "Bola Ahmed",
    id: "0946248",
    role: "Traveller",
    amount: 56000,
    transactionTime: "7:30 AM",
    transactionDate: "Sept 19, 2022",
    description: "Paid",
    status: "Completed",
  },
  {
    name: "Franka Igurma",
    id: "8973623",
    role: "Sender",
    amount: 2000,
    transactionTime: "6:15 PM",
    transactionDate: "Jan 30, 2022",
    description: "Paid",
    status: "In review",
  },
];

const Payments: React.FC = () => {
  return (
    <main className="p-6">
      <DashHeader title={"Payments"} />
      <section className="grid grid-cols-3 gap-6 mb-10">
        <DashboardCard
          title="Total Paid"
          naira={<Naira />}
          amount="3,120,000.00"
          percentage={undefined}
          bgColor={false}
        />
        <DashboardCard
          title="Pending Payment"
          naira={<Naira />}
          amount="385,500.00"
          percentage={undefined}
          bgColor={false}
        />
        <DashboardCard
          title="Total Income"
          naira={<Naira />}
          bgColor={true}
          amount="6,240,750.00"
          percentage={undefined}
        />
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
          getRowId={(row) => row.id}
        />
      </section>
    </main>
  );
};

export default Payments;
