import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container">
      <div className="flex justify-center items-center min-h-screen">
        <SignIn />
      </div>
    </div>
  );
}
