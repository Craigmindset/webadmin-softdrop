import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout';
import Login from './Pages/Login';
import AdminLayout from './Layouts/AdminLayout';
import Dashboard from './Pages/Dashboard';
import Senders from './Pages/Senders';
import Travellers from './Pages/Travellers';
import Dispute from './Pages/Dispute';
import Settings from './Pages/Settings';
import Deliveries from './Pages/Deliveries';
import NotFound from './Pages/NotFound';
import ForgotPassword from './Pages/ForgotPassword';
import SetUpPassword from './Pages/SetUpPassword';
import Payments from './Pages/Payments';
import ManageTeams from './components/SettingsComponents/ManageTeams';
import ProfileSetting from './components/SettingsComponents/ProfileSetting';
import SecuritySettings from './components/SettingsComponents/SecuritySettings';
import Completed from "./components/DeliveryComponents/Completed"
import InTransit from "./components/DeliveryComponents/InTransit"
import Canceled from "./components/DeliveryComponents/Canceled"
import AwaitingPickup from "./components/DeliveryComponents/AwaitingPickup"
import AllDeliveries from './components/DeliveryComponents/AllDeliveries';
import useToken from './hooks/useToken';


function App() {
  const { token } = useToken()


  const router = createBrowserRouter([
    {
      path: "/",
      element: token ? <Navigate to="/admin/dashboard" replace={true} /> : <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path : 'password-reset',
          element : <ForgotPassword/>
        },
        {
          path : 'set-up-password',
          element : <SetUpPassword/>
        }
      ]
    },
    {
      path: "/admin",
      element: !token ? <Login /> : <AdminLayout />,
      errorElement: <NotFound />,
      children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "senders",
        element: <Senders />
      },
      {
        path: "travellers",
        element: <Travellers />
      },
      {
        path: "all-deliveries",
        element: <Deliveries />,
        children:[
          {
            path: "all",
            element: <AllDeliveries />
          },{
            path: "in-transit",
            element: <InTransit/>
          },
          {
            path: "completed",
            element: <Completed/>
          },{
            path: "canceled",
            element: <Canceled/>
          },
          {
            path: "awaiting-pickup",
            element: <AwaitingPickup/>
          }
        ]
      },{
        path: "payments",
        element: <Payments/>
      },
      {
        path: "dispute",
        element: <Dispute />
      },
      {
        path: "settings",
        element: <Settings />,
        children:[
          {
            path: "profile-settings",
            element: <ProfileSetting />
          },{
            path: "manage-team",
            element: <ManageTeams/>
          },
          {
            path: "security-settings",
            element: <SecuritySettings />
          }
        ]
      }
    ]
    }
  ])


  return (
    <div className='font-Lato'>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
