"use client";

import Image from "next/image";

export default function Collaborator() {
    return (
        <section className="w-full bg-black py-20 px-6 flex flex-col items-center">

            {/*Heading*/}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Our Collaborator
            </h2>

            {/*Logos*/}
            <div className="flex flex-wrap justify-center items-center gap-12">
                
                <Image 
                    src="/collabs/collab1.png"
                    alt="Collaborator 1"
                    width={140}
                    height={80}
                    className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                />

                <Image 
                    src="/collabs/collab2.png"
                    alt="Collaborator 2"
                    width={140}
                    height={80}
                    className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                />

                <Image 
                    src="/collabs/raiyan.png"
                    alt="Collaborator 3"
                    width={90}
                    height={80}
                    className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                />

            </div>
        </section>

    );
}