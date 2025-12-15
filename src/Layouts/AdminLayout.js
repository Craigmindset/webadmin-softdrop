import { Outlet } from "react-router-dom";
import DashNav from "../components/DashNav";
import ErrorPage from "../Pages/ErrorPage";
import useUser from "../hooks/useUser";

export default function AdminLayout() {
  let { user, LoadingUser } = useUser();
  return (
    <div className="w-full justify-between">
      <DashNav />
      <div className="md:w-[80%] md:ml-auto h-[100vh] bg-[#F6F6F6] overflow-y-scroll">
        {LoadingUser ? (
          <div> Loading.. </div>
        ) : !user && !LoadingUser ? (
          <ErrorPage />
        ) : (
          <Outlet user={user} />
        )}
      </div>
    </div>
  );
}
