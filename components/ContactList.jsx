import ContactCard from "@/components/ContactCard";

export default function ContactList() {
    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                <ContactCard 
                    name="Naimul Karim Zishan"
                    role="Project Manager"
                    image="/team/Zishan1.jpg"
                    whatsapp="https://wa.me/8801234567890"
                    messenger="https://m.me/username"
                />

                <ContactCard 
                    name="Naimul Karim Zishan"
                    role="Client Support"
                    image="/team/Zishan2.jpg"
                    whatsapp="https://wa.me/8801234567890"
                    messenger="https://m.me/username"
                />

                <ContactCard 
                name="Naimul Karim Zishan"
                role="CEO"
                image="/team/Zishan3.jpg"
                whatsapp="https://wa.me/8801234567890"
                messenger="https://m.me/username"
                />
                
            </div>
        </section>
    );
}