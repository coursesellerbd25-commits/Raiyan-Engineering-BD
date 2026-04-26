import AboutBanner from "@/components/AboutBanner";
import MeetTeam from "@/components/MeetTeam";
import PresenceServices from "@/components/PresenceServices";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import OurStory from "@/components/OurStory";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <>
            <AboutBanner />
            <MeetTeam />
            <PresenceServices />
            <WhyChoose />
            <Stats />
            <OurStory />
            <Footer />
        </>
    );
}