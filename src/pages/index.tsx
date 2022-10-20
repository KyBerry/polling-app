import type { NextPage } from "next";
import Head from "next/head";
import { prisma } from "../db/client";

const Home: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold">Create T3 App</h1>
        <code>{ props.questions }</code>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const questions = await prisma.pollQuestion.findMany();

  return {
    props: {
      questions: JSON.stringify(questions),
    }
  }
}

export default Home;
