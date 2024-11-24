import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-[#2b3555] w-[460px] rounded-lg py-8">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-lg mb-6">
            <img
              src="public\Plan de travail 3@4x-100.jpeg"
              alt="Logo"
              className="h-16 w-16"
            />
          </div>
          <h1 className="text-white text-2xl font-medium">Login</h1>
          <p className="text-white/80 text-sm mt-1 mb-8">
            Enter your email and password to sign in!
          </p>
        </div>

        {/* Form Section */}
        <div className="px-8">
          <form className="space-y-4">
            <div>
              <label className="block text-white text-sm mb-1">Login*</label>
              <input
                type="text"
                placeholder="Login, Email or phone number"
                className="w-full p-2.5 rounded-md"
              />
            </div>

            <div className="mt-4">
              <label className="block text-white text-sm mb-1">Password*</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full p-2.5 rounded-md pr-10"
                />
                {/* Password visibility toggle icon would go here */}
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input type="checkbox" id="keep-logged" className="mr-2" />
              <label htmlFor="keep-logged" className="text-white text-sm">
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F15A2B] text-white py-2.5 rounded-md mt-4 font-medium text-sm"
            >
              Sign in
            </button>

            <div className="text-right mt-2">
              <a href="#" className="text-white/80 text-sm">
                Forgot password?
              </a>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-1 h-[1px] bg-white/20" />
              <span className="px-4 text-white/60 text-sm">Or Login with</span>
              <div className="flex-1 h-[1px] bg-white/20" />
            </div>

            <button
              type="button"
              className="w-full bg-white text-gray-700 py-2.5 rounded-md flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
          </form>

          {/* Footer Links */}
          <div className="flex justify-center gap-6 mt-8 text-center">
            <a href="#" className="text-white/60 text-xs">
              Terms
            </a>
            <a href="#" className="text-white/60 text-xs">
              Privacy
            </a>
            <a href="#" className="text-white/60 text-xs">
              Status
            </a>
            <a href="#" className="text-white/60 text-xs">
              Data
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
