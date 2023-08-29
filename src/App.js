import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout';
import Login from './Pages/Login';
import AdminLayout from './Layouts/AdminLayout';
import Dashboard from './Pages/Dashboard';
import Senders from './Pages/Senders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Login />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
    {
      path: "dashboard",
      element: <Dashboard />
    },
    {
      path: "senders",
      element: <Senders />
    }
  ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
