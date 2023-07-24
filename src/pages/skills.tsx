import Head from "next/head";
import SkillsPage from "../components/skills";
import HomeLayout from "../layouts/home";

const Skills = () => {
  const pro_image = process.env.NEXT_PUBLIC_PRO_IMAGE;

  return (
    <>
      <Head>
        <title>Skills - AMANI Eric</title>
        <meta
          name="description"
          content="Here are my skills in Backend, Frontend, SEO, Database Management, Responsive Web Design, and Electronics."
        />
        <meta
          name="keywords"
          content="AMANI Eric, skills, backend, frontend, SEO, database management, responsive web design, electronics, PCB design, arduino programming, circuit design, CCTV camera system installation"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Skills - AMANI Eric" />
        <meta
          property="og:description"
          content="Here are my skills in Backend, Frontend, SEO, Database Management, Responsive Web Design, and Electronics."
        />
        <meta property="og:image" content={pro_image} />{" "}
        <meta property="og:url" content="https://amanieric.com/skills" />
        <meta property="og:site_name" content="AMANI Eric" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Skills - AMANI Eric" />
        <meta
          name="twitter:description"
          content="Here are my skills in Backend, Frontend, SEO, Database Management, Responsive Web Design, and Electronics."
        />
        <meta name="twitter:image" content={pro_image} />
        <meta name="twitter:url" content="https://amanieric.com/skills" />
        <meta name="twitter:site" content="@amaniericus" />{" "}
      </Head>
      <HomeLayout>
        <SkillsPage />
      </HomeLayout>
    </>
  );
};

export default Skills;
