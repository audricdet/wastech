import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import styles from "./index.module.css";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const user = useUser()
  return (
    <>
      <div>
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
    </>
  );
}
