
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer"
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders"
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import "./app.scss"
function App() {
  const Layout = ()=>{
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }


const router = createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children:[
    {
      path:"/",
      element:<Home />
    },
  {
    path: "/gigs",
    element: <Gigs />,
  },
  {
    path: "/gigs/:id",
    element: <Gigs />,
  }, {
    path: "/myGigs",
    element: <MyGigs />,
  },
  {
    path:"/orders",
    element: <Orders />
  },
  {
    path: "/add",
    element: <Add />,
  },{
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/message/:id",
    element: <Message />,
  },

 

]
}

]);


  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App
