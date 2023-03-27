import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { PageLayout } from "~/components/layout";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn, user } = useUser();

  return (
    <>
      <Head>
        <title>Fundin</title>
      </Head>
      <PageLayout>
        {!isSignedIn && (
          <div className="flex justify-center">
            <SignInButton />
          </div>
        )}
        {isSignedIn && <SignOutButton>Sign out</SignOutButton>}
        {user && (
          <>
            <h1>{user.id}</h1>
            <p>{user.fullName}</p>
          </>
        )}
      </PageLayout>
    </>
  );
};

export default Home;
