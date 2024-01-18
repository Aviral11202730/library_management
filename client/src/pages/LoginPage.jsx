import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';




const Login = () => {
    const[formdata ,setformdata] = useState({});
    const navigate = useNavigate();
    function handleChange(e) {
        setformdata({
            ...formdata,
            [e.target.id] :e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const res =  await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        });
        const data = await res.json();
        console.log(data);
        

        if(data.success){
            navigate('/dashboard');
        }
        
    }


    return ( 
        <div className="flex flex-col h-screen w-screen justify-start  mt-24 items-center gap-10">
            <h1 className="text-3xl">Library Management System</h1>
            <h1 className="text-3xl">Login</h1>
            <form className="flex flex-col gap-4 w-72" onSubmit={handleSubmit}>
                <input type="text" placeholder="UserId" className="p-3 border rounded-lg" id="userId" onChange={handleChange} />
                <input type="text" placeholder="Password" className="p-3 border rounded-lg" id="password" onChange={handleChange}  />
                <div className="flex items-center justify-between">
                    
                    <button className=" hover:shadow-md w-full  font-bold uppercase p-3 bg-sky-500 rounded-lg text-white">Login</button>
                </div>
            </form>
            <div>
                <p>Dont have an account? <span className="text-blue-500"><Link to={"/register"}>register here</Link></span></p>
            </div>
        </div>
     );
}
 
export default Login;