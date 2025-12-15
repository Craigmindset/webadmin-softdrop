import { Outlet } from "react-router-dom";
import DashHeader from "../components/DashHeader";
import DeliveryNav from "../components/DeliveryNav";
import React from "react";

const Deliveries: React.FC = () => {
  return (
    <div>
      <DashHeader title={"All Deliveries"} />
      <DeliveryNav />
      <Outlet />
    </div>
  );
};

export default Deliveries;
