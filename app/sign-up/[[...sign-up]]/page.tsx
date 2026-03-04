import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">▲ Arcline</h1>
          <p className="text-sm text-gray-500 mt-1">Command Center</p>
        </div>
        <SignUp />
      </div>
    </div>
  );
}
