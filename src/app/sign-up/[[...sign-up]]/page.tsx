import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container">
      <div className="flex justify-center items-center min-h-screen">
        <SignUp />
      </div>
    </div>
  );
}
