import ExperiencePage from "@/components/experience";
import Head from "next/head";
import HomeLayout from "../layouts/home";

const Experience = () => {
  const pro_image = process.env.NEXT_PUBLIC_PRO_IMAGE;

  return (
    <>
      <Head>
        <title>Experience - AMANI Eric</title>
        <meta
          name="description"
          content="AMANI Eric's experience as a Fullstack Engineer, working on front-end and back-end development with IoT, AI, and blockchain technologies."
        />
        <meta
          name="keywords"
          content="AMANI Eric, Fullstack Engineer, Frontend, Backend, IoT, AI, Blockchain"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Experience - AMANI Eric" />
        <meta
          property="og:description"
          content="AMANI Eric's experience as a Fullstack Engineer, working on front-end and back-end development with IoT, AI, and blockchain technologies."
        />
        <meta property="og:image" content={pro_image} />
        <meta
          property="og:url"
          content="https://www.amanieric.com/experience"
        />
        <meta property="og:site_name" content="AMANI Eric" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Experience - AMANI Eric" />
        <meta
          name="twitter:description"
          content="AMANI Eric's experience as a Fullstack Engineer, working on front-end and back-end development with IoT, AI, and blockchain technologies."
        />
        <meta name="twitter:image" content={pro_image} />{" "}
        <meta
          name="twitter:url"
          content="https://www.amanieric.com/experience"
        />
        <meta name="twitter:site" content="@amaniericus" />
      </Head>
      <HomeLayout>
        <ExperiencePage />
      </HomeLayout>
    </>
  );
};

export default Experience;
