import ContactCard from "@/components/ContactCard";

export default function ContactList() {
    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                <ContactCard 
                    name="Raiyan Ahmed"
                    role="Project Manager"
                    image="/contactTeam/leader1.jpg"
                    whatsapp="https://wa.me/8801234567890"
                    messenger="https://m.me/username"
                />

                <ContactCard 
                    name="Sarah Khan"
                    role="Client Support"
                    image="/contactTeam/leader2.jpg"
                    whatsapp="https://wa.me/8801234567890"
                    messenger="https://m.me/username"
                />

            </div>
        </section>
    );
}