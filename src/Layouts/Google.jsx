import React from "react";
import useAuth from "../componenets/useAuth";
import { useNavigate } from "react-router-dom";

const Google = () => {
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      console.log(user);

      // data base save
      const savedStudent = { name: user.displayName, email: user.email };
      fetch(`https://summer-camp-server-gamma-bay.vercel.app/students`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedStudent),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <>
      {" "}
      <div className="divider border-b opacity-40 mx-8"></div>
      <div className="mx-auto">
        <button
          onClick={handleGoogleSignIn}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center p-2 space-x-4 border  focus:ring-2 focus:ring-offset-1 dark:border-[#c7b1fa] focus:ring-violet-400 rounded-full mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Google;
