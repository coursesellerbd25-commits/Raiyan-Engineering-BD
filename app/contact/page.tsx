import BannerContact from "@/components/BannerContact";
import ContactList from "@/components/ContactList";
import GraphContact from "@/components/GraphContact";
/*import OurOffice from "@/components/OurOffice";
import RealMap from "@/components/RealMap";*/
import OfficeMap from "@/components/OfficeMap";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <>
            <BannerContact />
            <ContactList />
            <GraphContact />
            {/*<OurOffice />
            <RealMap />*/}
            <OfficeMap />
            <Footer />
        </>
    );
}