import { Link } from "react-router-dom";

const Reports = () => {
    return ( 
        <div className="flex flex-col justify-start mt-8 w-full items-center gap-6">
            <div className="flex justify-between items-center gap-10">
            <h1 className="text-3xl">Available Reports</h1>
            <Link to={"/dashboard"} className="text-blue-500">
                <p>Home</p>
            </Link>
            </div>
            <div className="flex flex-col gap-3 text-xl">
                <p>Master List of Books</p>
                <p>Master List of Movies</p>
                <p>Master List of Membership</p>
                <p>Active Issues</p>
                <p>Overdue Returns</p>
                <p>Pending Issue Requests</p>
            </div>
            <div>
                <Link to={"/"}>
                    <p className="text-blue-500">Logout</p>
                </Link>
            </div>
        </div>
     );
}
 
export default Reports;