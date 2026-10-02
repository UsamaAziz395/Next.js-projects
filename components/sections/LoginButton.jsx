"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { LockKeyhole } from "lucide-react";

export default function LoginButton() {
  const handleGoogleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <div className="w-full max-w-md border border-gray-800 rounded-2xl mt-20 p-8 md:p-10 shadow-xl bg-[#363738a1]">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-5 text-white">
        Sign in to continue
      </h1>

      {/* Google Button */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 cursor-pointer bg-white text-black font-semibold py-3.5 px-4 rounded-lg mb-4 hover:bg-gray-100 transition-colors"
      >
        <FcGoogle className="text-xl" />

        Continue with Google
      </button>

      {/* Apple Button */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 cursor-pointer bg-black text-white font-semibold py-3.5 px-4 rounded-lg mb-8 hover:bg-gray-900 transition-colors border border-gray-800"
      >
        <FaApple className="text-xl" />

        Continue with Apple
      </button>

      {/* Privacy Notice */}
      <div className="bg-[#292a2f] rounded-lg p-4 flex items-start gap-3">
        
        <LockKeyhole
          size={17}
          className="text-gray-500 mt-1 shrink-0"
        />

        <p className="text-sm text-gray-400 leading-relaxed">
          We respect your privacy. Your data is stored securely and used only
          for fitness planning.{" "}
          
          <a
            href="/privacy"
            className="text-[#00ffcc] hover:underline"
          >
            Privacy Policy
          </a>
        </p>

      </div>

    </div>
  );
}