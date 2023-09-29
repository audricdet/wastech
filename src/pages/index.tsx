import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Side from "~/component/sidebar";

export default function Home() {
  const user = useUser()
  return (
    <>
      <div>
        {!user.isSignedIn && <SignInButton />}
      </div>
    <Side/>
    </>
  );
}
