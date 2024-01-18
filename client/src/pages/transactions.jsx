import { useState } from "react";
import { Link } from "react-router-dom";

const Transation = () => {
    const[bookavaliable ,setbookavaliable] = useState(false);
    const[bookissue,setbookissue] = useState(false);
    const[returnbook ,setreturnbook] = useState(false);
    const[fine,setfine]=useState(false);
    
    return ( 
        <div className="flex flex-col h-screen w-screen justify-start  mt-4 items-center">
        <div className="flex items-center gap-20">
        <Link className="text-blue-500">
        <h1>chart</h1>
        </Link>
        <h1>Transaction</h1>
        <Link to={"/dashboard"} className="text-blue-500">
        <h1>home</h1>
        </Link>
        </div>
            <div className="flex flex-col mt-6">
            <p onClick={() => setbookavaliable((prev) => !prev)} className="cursor-pointer text-blue-500 ">Is book available?</p>
            <p onClick={() => setbookissue((prev) => !prev)} className="cursor-pointer text-blue-500">Issue book?</p>
            <p onClick={() => setreturnbook((prev) => !prev)} className="cursor-pointer text-blue-500">Return book?</p>
            <p onClick={() => setfine((prev) => !prev)} className="cursor-pointer text-blue-500">Pay Fine?</p>
            </div>
            {
               bookavaliable && (
                <div className="mt-10">
                    <h1 className="text-3xl">Book Availability</h1>
                    <div className="flex gap-20 mt-6">
                        <p>Enter book name</p>
                        <select name="Books" id="cars" >
                        <option value="volvo">Book 1</option>
                        <option value="saab">Book2</option>
                        <option value="mercedes">Book 3</option>
                        <option value="audi">Book 4</option>
                        </select>
                        
                    </div>
                    <div className="flex gap-20 mt-6">
                    <p>Enter Author</p>
                        <select name="Author" id="cars">
                        <option value="volvo">Author 1</option>
                        <option value="saab">Author 2</option>
                        <option value="mercedes">Author 3</option>
                        <option value="audi">Author 4</option>
                        </select>

                    </div>
                    <button className=" w-full p-3 bg-sky-500 rounded-lg text-white mt-8">Search</button>

                </div>
               ) 
            }
            {
                bookissue && (
                    <div className="mt-10">
                        <h1 className="text-3xl">Book issue</h1>
                        <div className="flex gap-20 mt-6">
                            <p>Enter book name</p>
                            <select name="Books" id="cars" >
                            <option value="volvo">Book 1</option>
                            <option value="saab">Book2</option>
                            <option value="mercedes">Book 3</option>
                            <option value="audi">Book 4</option>
                            </select>
                            
                        </div>
                        <div className="flex gap-20 mt-6">
                        <p>Enter Author</p>
                            <select name="Author" id="cars">
                            <option value="volvo">Author 1</option>
                            <option value="saab">Author 2</option>
                            <option value="mercedes">Author 3</option>
                            <option value="audi">Author 4</option>
                            </select>
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>issue date</p>
                            <input type="date" />
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>Return date</p>
                            <input type="date" />
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>Remarks</p>
                            <textarea />
                        </div>
                        <button className=" w-full p-3 bg-sky-500 rounded-lg text-white mt-8">Confirm</button>
                    </div>
                )
            }
            {
                returnbook && (
                    <div className="mt-10">
                        <h1 className="text-3xl">Book return</h1>
                        <div className="flex gap-20 mt-6">
                            <p>Enter book name</p>
                            <select name="Books" id="cars" >
                            <option >Book 1</option>
                            <option >Book2</option>
                            <option >Book 3</option>
                            <option >Book 4</option>
                            </select>
                            
                        </div>
                        <div className="flex gap-20 mt-6">
                        <p>Enter Author</p>
                        <textarea />
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>Serial number</p>
                            <select name="serial no">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>Issue Date</p>
                            <textarea />
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>return book</p>
                            <input type="date" />
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>Remarks</p>
                            <textarea />
                        </div>
                        <button className=" w-full p-3 bg-sky-500 rounded-lg text-white mt-8">Confirm</button>
                    </div>
                )
            }
            {
                fine &&(
                    <div className="mt-10">
                        <h1 className="text-3xl">Pay Fine</h1>
                        <div className="flex gap-20 mt-6">
                            <p>Enter book name</p>
                            <select name="Books" id="cars" >
                            <option >Book 1</option>
                            <option >Book2</option>
                            <option >Book 3</option>
                            <option >Book 4</option>    
                            </select>
                            
                        </div>
                        <div className="flex gap-20 mt-6">
                        <p>Enter Author</p>
                        <textarea />
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>Serial number</p>
                            <select name="serial no">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>Issue Date</p>
                            <textarea />
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>return book</p>
                            <input type="date" />
                        </div>
                        <div className="flex gap-20 mt-6">
                            <p>Remarks</p>
                            <textarea />
                        </div>
                        <button className=" w-full p-3 bg-sky-500 rounded-lg text-white mt-8">Confirm</button>
                    </div>
                )
            }
        </div>
     );
}
 
export default Transation;