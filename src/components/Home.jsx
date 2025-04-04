import {useState} from "react";

const Home = () => {
    const [role, setRole] = useState("");
    const [user, setUser] = useState({});

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:8000/users/set_role", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
                body: JSON.stringify({role}),
            });

            if (!response.ok) {
                throw new Error("Failed to set role");
            }

            const res = await response.json();
            setUser(res);
        } catch (error) {
            console.error("Error setting role: ", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center text-4xl font-bold text-center">
            {Object.keys(user).length === 0 ? (
                <h1 className="text-center mt-[30vh]">You are not logged in</h1>
            ) : (
                <div>
                    <h1 className="text-center mt-[30vh]">
                        Welcome back {user.email}
                    </h1>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-5 justify-center">
                            <label className="text-2xl">
                                <input
                                    type="radio"
                                    name="role"
                                    value="seller"
                                    checked={role === "seller"}
                                    onChange={handleRoleChange}
                                />{" "}
                                Seller
                            </label>
                            <label className="text-2xl">
                                <input
                                    type="radio"
                                    name="role"
                                    value="buyer"
                                    checked={role === "buyer"}
                                    onChange={handleRoleChange}
                                />{" "}
                                Buyer
                            </label>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="mt-8 px-4 text-sm py-2 bg-blue-500 text-white rounded"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;