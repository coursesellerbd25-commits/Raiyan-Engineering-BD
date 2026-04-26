"use client";

import Link from "next/link";

const items = [
    {
        title: "Web Development",
        img: "gallery/img1.jpg",
        link: "/services/web",
    },
    {
        title: "UI/UX Design",
        img: "/gallery/img2.jpg",
        link: "/services/design",
    },
    {
        title: "SEO Optimization",
        img: "/gallery/img1.jpg",
        link: "/services/seo",
    },
    {
        title: "Engineering Solutions",
        img: "/gallery/img2.jpg",
        link: "/services/engineering",
    },
];

export default function Gallery() {
    return (
        <div className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/*Heading*/}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Products & Services
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Explore what we offer with excellence
                    </p>
                </div>

                {/*Grid*/}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

                    {items.map((item, index) => (
                        <Link 
                            key={index}
                            href={item.link}
                            className="relative group overflow-hidden rounded-xl"
                        >

                            {/*Image*/}
                            <img 
                                src={item.img}
                                alt="item.title"
                                className="w-full h-64 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                            />

                            {/*Overlay*/}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                            {/*Text*/}
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>
                            </div>

                        </Link>
                    ))}

                </div>

            </div>
        </div>
    );
}