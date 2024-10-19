import MainLogo from "./ui/Home/mainLogo";
import MainText from "./ui/Home/mainText";
import Head from "next/head";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AKCSE McGill",
  url: "https://akcsemcgill.ca",
  sameAs: ["https://www.instagram.com/akcse_mcgill/"],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>AKCSE McGill - Korean-Canadian Scientists and Engineers</title>
        <meta
          name="description"
          content="Learn about AKCSE McGill, a vibrant community for Korean-Canadian scientists and engineers, offering networking, mentorship, and development opportunities."
        />
        <meta name="keywords" content="AKCSE, AKCSE McGill, 악세, 악세 맥길" />
        <meta property="og:title" content="AKCSE McGill" />
        <meta
          property="og:description"
          content="Official page of AKCSE McGill."
        />
        <meta property="og:image" content="/AKCSE_McGill.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <section className="lg:flex w-full h-full">
        <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] lg:h-[770px] xl:h-[790px] bg-white rounded-3xl shadow-lg lg:ml-3 mt-2 p-2 lg:p-0">
          <MainLogo />
        </div>
        <div className="flex w-full lg:w-1/2 h-full lg:mt-auto mt-10 p-2 lg:p-0 mb-10">
          <MainText />
        </div>
      </section>
    </>
  );
}
