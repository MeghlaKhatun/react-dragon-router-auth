import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {logIn}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    const navigate=useNavigate();

    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const email=form.get("email");
        const password=form.get("password");
        console.log(email,password);

        //Log in
        logIn(email,password)
        .then(result=>{
            console.log(result.user)
           navigate(location.state ? location.state : "/")
        })
        .catch(error=>{
            console.error(error)
        })

    }
    return (
    <div>
            <Navbar></Navbar>
            <h2 className="text-2xl text-center">Please Login</h2>

             <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-[16px] mt-4 font-semibold text-center">Don’t Have An Account ? <Link className="text-blue-600" to="/register">Register</Link> </p>

    </div>
    );
};

export default Login;