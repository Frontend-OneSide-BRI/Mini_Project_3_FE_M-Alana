import React from "react";
import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {firebaseAuth} from "../../../utils/firebase-config";

function SignupCard() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleSignin = async () => {
        try {
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="grid justify-center absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <form>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} required />
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" value={formValues.password} onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} required />
                    </div>
                    <button onClick={handleSignin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignupCard;