import Footer from "./component/common/Footer";
import Header from "./component/common/Header";
import HomeAbout from "./component/HomeAbout";
import HomeBanner from "./component/HomeBanner";
import HomeContact from "./component/HomeContact";
import HomeExperience from "./component/HomeExperience";
import { HomeSkills } from "./component/HomeSkills";
import HomeWork from "./component/HomeWork";

export default function Home() {
  return (
    <div className="homepage">
      <Header/>
      <section className="home_bannerwrap" id="banner" role="banner">
        <HomeBanner/>
      </section>
      <section className="aboutuswrap bg-gray-50 dark:bg-[#111827]" id="about">
        <HomeAbout/>
      </section>
      <section className="skillswrap" id="skills">
        <HomeSkills/>
      </section>
      <section className="experincewrap bg-gray-50 dark:bg-[#111827]" id="experince">
        <HomeExperience/>
      </section>
      <section className="workwrap" id="work">
        <HomeWork/>
      </section>
      <section className="getintouchwrap" id="contact">
        <HomeContact/>
      </section>
      <Footer/>
    </div>

  );
}
