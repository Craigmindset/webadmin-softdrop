import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
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
    element: <AdminLayout />,
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
      element: <Deliveries />
    },{

    },
    {
      path: "dispute",
      element: <Dispute />
    },
    {
      path: "settings",
      element: <Settings />
    }
  ]
  }
])

function App() {
  return (
    <div className='font-Lato'>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
