import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SiInstagram, SiYoutube, SiTwitter, SiLinkedin } from "react-icons/si";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src="/gdsclogo.png"
          alt="Google Developer Student Clubs Logo"
          width={400}
          height={400}
          className="w-[80vw] max-w-[400px]"
        />

        <p className={"text-4xl my-10"}>Heriot-Watt University</p>

        <div className={styles.grid}>
          <a
            href="https://gdsc.community.dev/heriot-watt-university/"
            without
            rel="noreferrer"
            target={"_blank"}
            className={"card hover:border-red-400 hover:text-red-500"}>
            <h2>GDSC Community Page</h2>
          </a>

          <div className={"card"}>
            <h2>Socials</h2>
            <br />
            <div className="flex w-full justify-evenly">
              <a
                href="https://instagram.com/gdsc_hwu?igshid=YmMyMTA2M2Y="
                without
                rel="noreferrer"
                target={"_blank"}
                className="hover:text-pink-500 hover:scale-110 hover:duration-150 p-4 rounded-full bg-[#fcfdfa88]">
                <SiInstagram fontSize={"35px"} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC8jF4bov22bDnf9pClPigvg"
                without
                rel="noreferrer"
                target={"_blank"}
                className="hover:text-red-500 hover:scale-110 hover:duration-150 p-4 rounded-full bg-[#fcfdfa88]">
                <SiYoutube fontSize={"35px"} />
              </a>
              <a
                href="https://twitter.com/gdsc_hwu"
                without
                rel="noreferrer"
                target={"_blank"}
                className="hover:text-blue-800 hover:scale-110 hover:duration-150 p-4 rounded-full bg-[#fcfdfa88]">
                <SiTwitter fontSize={"35px"} />
              </a>
              <a
                href="https://www.linkedin.com/company/gdsc-hwu"
                without
                rel="noreferrer"
                target={"_blank"}
                className="hover:text-purple-500 hover:scale-110 hover:duration-150 p-4 rounded-full bg-[#fcfdfa88]">
                <SiLinkedin fontSize={"35px"} />
              </a>
            </div>
          </div>

          <a
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQVOwVpUMkhKQjFUR1NCWFVPUlhSUDRQNThKMUNEVC4u"
            without
            rel="noreferrer"
            target={"_blank"}
            className={"card hover:border-orange-400 hover:text-orange-500"}>
            <h2>GDSC @ HWU - Sign-Up Form</h2>
          </a>

          <a
            href="https://youtube.com/playlist?list=PLYlB334TcbXGVBqG-7m_udB-QTWQXYCf8"
            without
            rel="noreferrer"
            target={"_blank"}
            className={"card hover:border-blue-400 hover:text-blue-500"}>
            <h2>Creating your own Web App Series - Playlist</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
