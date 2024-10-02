import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import Home from "../Pages/Home";




const router=createBrowserRouter([
    {
        path:'/',
        element:<Wrapper/>,
        children:[{
            index:true,
            element:<Home/>
        },{
        
        }]
    }
])

const AllRoutes=({children})=>{
    return <RouterProvider router={router}>
        {children}
    </RouterProvider>
}
export default AllRoutes;
