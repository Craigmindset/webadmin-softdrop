import { Outlet } from "react-router-dom";
import DashHeader from "../components/DashHeader";
import SettingsNav from "../components/SettingsNav";
import React from "react";

const Settings: React.FC = () => {
  return (
    <main className="p-6">
      <DashHeader title={"Settings"} />
      <SettingsNav />
      <Outlet />
    </main>
  );
};

export default Settings;
