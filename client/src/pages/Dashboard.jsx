import {Link} from "react-router-dom"

const Dashboard = () => {
    return ( 
        <div className="flex flex-col h-screen w-screen justify-start  mt-4 items-center ">
        <h1>Home page</h1>
        <div className="flex gap-32">
        <Link to={"/reports"} className="text-blue-500">
        <p>Reports</p>
        </Link>
            
        <Link to={"/transation"} className="text-blue-500">
        <p>Transitions</p>
        </Link>
        </div>
        <h2 className="mb-4">Product details</h2>
        <table className="border">
            <tr className="border">
                <th className="border">Code No From</th>
                <th className="border">Code no To</th>
                <th className="border">Category</th>
            </tr>
            <tr className="border">
                <td className="border">SC(B/M)000001</td>
                <td className="border">SC(B/M)000004</td>
                <td className="border">Science</td>
            </tr>
            <tr className="border">
                <td className="border">EC(B/M)000001</td>
                <td className="border">EC(B/M)000004</td>
                <td className="border">Economics</td>
            </tr>
            <tr className="border">
                <td className="border">FC(B/M)000001</td>
                <td className="border">FC(B/M)000004</td>
                <td className="border">Fiction</td>
            </tr>
            <tr className="border">
                <td className="border">CH(B/M)000001</td>
                <td className="border">CH(B/M)000004</td>
                <td className="border">Children</td>
            </tr>
            <tr className="border">
                <td className="border">PD(B/M)000001</td>
                <td className="border">PD(B/M)000004</td>
                <td className="border">Personal Development</td>
            </tr>
        </table>
        <Link to={"/"} className="text-red-500">
            <p>Logout</p>
        </Link>
        </div>
     );
}
 
export default Dashboard;