import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Recipe Blog | Home</title>
      </Head>
      <div>
        <a
          href="http://localhost:3000"
          className="text-3xl text-left text-green-500 hover:text-red-400"
        >
          {" "}
          Home page
        </a>
        <h1 className="text-4xl text-center text-cyan-300"> About Page</h1>
        <p className="text-center ">
          Hello, My name is Darrel and this is my first tailwind css project
          using nextjs
        </p>
      </div>
    </>
  );
};

export default About;
