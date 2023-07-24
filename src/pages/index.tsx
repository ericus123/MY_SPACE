import Head from "next/head";
import AboutPage from "../components/about";
import HomeLayout from "../layouts/home";

const About = () => {
  const pro_image = process.env.NEXT_PUBLIC_PRO_IMAGE;

  return (
    <>
      <Head>
        <title>About - AMANI Eric</title>
        <meta
          name="description"
          content="Crafting Great Digital Products And Xperiences. Fullstack Engineer | IoT | DAPP"
        />
        <meta
          name="keywords"
          content="Amani, Fullstack Engineer, IoT, Internet of Things, DAPP, Decentralized Applications"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About - AMANI Eric" />
        <meta
          property="og:description"
          content="Crafting Great Digital Products And Xperiences. Fullstack Engineer | IoT | DAPP"
        />
        <meta property="og:image" content={pro_image} />
        <meta property="og:url" content="https://amanieric.com/about" />
        <meta property="og:site_name" content="AMANI Eric" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About - AMANI Eric" />
        <meta
          name="twitter:description"
          content="Crafting Great Digital Products And Xperiences. Fullstack Engineer | IoT | DAPP"
        />
        <meta name="twitter:image" content={pro_image} />
        <meta name="twitter:url" content="https://amanieric.com/about" />
        <meta name="twitter:site" content="@amaniericus" />
      </Head>
      <HomeLayout>
        <AboutPage />
      </HomeLayout>
    </>
  );
};

export default About;
