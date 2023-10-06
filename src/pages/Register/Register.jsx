import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {createUser}=useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get("name");
        const photo=form.get("photo");
        const email=form.get("email");
        const password=form.get("password");
        console.log(name,photo,email,password);

        //Create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div>
        <Navbar></Navbar>
        <h2 className="text-2xl text-center">Please Login</h2>

         <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>

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
                <button className="btn btn-primary">Register</button>
            </div>

        </form>
        <p className="text-[16px] mt-4 font-semibold text-center">Already Have An Account ? <Link className="text-blue-600" to="/login">Login</Link> </p>

</div>
    );
};

export default Register;