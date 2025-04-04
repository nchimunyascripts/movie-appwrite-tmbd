import React, {useState} from 'react';

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email, password: password
        }
        loginUser(data).then(r => console.log(r))
    }
    const loginUser = async (data) => {
        const response = await fetch("http://localhost:8000/users", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    }
    return (
        <div className="w-[40%]">
            <h1 className="text-center mt-[10vh] font-bold text-white">Sign Up</h1>
            <form onSubmit={handleSubmit}
                  className="flex flex-col gap-5 justify-center items-center border-1 border-amber-200
                  rounded-2xl p-5 mt-4">
                <input type="email"
                       onChange={(e) => setEmail(e.target.value)}
                       className='border-1 border-amber-200 text-white p-2 w-[70%] rounded-sm outline-none'
                       placeholder="email@example.com"/>
                <input type="password"
                       onChange={(e) => setPassword(e.target.value)}
                       className='border-1 border-amber-200 text-white p-2 w-[70%] rounded-sm outline-none'
                       placeholder="password"/>
                <button type="submit"
                        className='border-1 border-amber-200 transition delay-75 shadow-[0px_3px_6px_rgba(0,0,0,0.35)]
                         bg-amber-500 text-white cursor-pointer hover:bg-amber-400 p-2 w-[30%]
                         rounded-sm outline-none'>Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;