import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import SaveUser from "../../api/SaveUser";

const SignUp = () => {
  const [errormsg, setErrorMsg] = useState("");
  let password;
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    const displayName = e.target.name.value;
    const rawEmail = e.target.email?.value;
    const email = rawEmail?.toLowerCase();
    const firstpassword = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!displayName) {
      toast.error("Enter valid name");
      return;
    }

    if (firstpassword === confirmPassword) {
      password = firstpassword || confirmPassword;
    } else {
      setErrorMsg("password doesn't match");
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password needs to be at least six characters");
      return;
    }

    if (!/.*[A-Z].*/.test(password)) {
      setErrorMsg("Password needs at least one capital letter");
      return;
    }

    try {
      // create user
      const result = await createUser(email, password);
      console.log(result);

      // update user
      await updateUserProfile(displayName);
      // save user to database
      const user = {
        email,
        name: displayName,
      };
      const res = await SaveUser(user);
      console.log(res, "response");
      toast.success("successfully signed up");
    } catch (error) {
      setErrorMsg(error.message);
      toast.error("could not sign up");
    }
    e.target.reset();
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-stone-800">
      <div className="flex flex-col 2xl:w-1/4 p-6 rounded-md sm:p-10 bg-stone-700 text-slate-300">
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-400">Assalamualaikum</p>
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        </div>
        <form
          onSubmit={handleSignUp}
          //   onChange={(e) => setValid(true)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 rounded-md  focus:outline-none bg-stone-800 "
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 rounded-md  focus:outline-none bg-stone-800 "
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 rounded-md  focus:outline-none bg-stone-800 "
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="confirmPassword" className="text-sm mb-2">
                  Confirm password
                </label>
              </div>
              <input
                type="password"
                name="confirmPassword"
                required
                id="confirmPassword"
                placeholder="*******"
                className="w-full px-3 py-2 rounded-md  focus:outline-none bg-stone-800 "
              />
            </div>
            <p className="-pt-2 h-3 text-red-700 italic text-sm">{errormsg}</p>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#5AB270] w-full rounded-md py-3 text-white"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1"></div>
        <p className="px-6 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="hover:underline hover:text-[#5AB270] ">
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
