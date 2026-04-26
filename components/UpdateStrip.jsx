import Link from "next/link";

export default function UpdateStrip() {
    const updates = [
        { text: "Project completed in Chittagong", link: "/projects" },
        { text: "New partnership announced", link: "/about" }, 
        { text: "Hiring engineers now", link: "/careers" },
        { text: "Launching new service soon", link: "/services" },
    ];

    return (
        <div className="w-full bg-gray-900 text-white border-y border-gray-800">

            <div className="max-w-7xl mx-auto flex items-center py-3 px-4">

                {/*Labels*/}
                <div className="font-semibold mr-6 whitespace-nowrap z-10 bg-gray-900 pr-4">
                    Latest Updates:
                </div>

                {/*Scrolling container*/}
                <div className="overflow-hidden flex-1 relative">

                {/*Left Fade*/}
                <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
                {/*Right Fade*/}
                <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

                <div className="flex animate-marquee whitespace-nowrap">

                    {/*First set*/}
                    <div className="flex gap-8">
                    {updates.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="hover:text-blue-400 transition"
                        >
                            {item.text}
                        </Link>
                    ))}
                    </div>

                    {/*Gap between sets*/}
                    <div className="w-32 md:w-64"></div>

                    {/*Second set(for looping)*/}
                    <div className="flex gap-8">
                        {updates.map((item,index) => (
                            <Link 
                                key={`dup-${index}`}
                                href={item.link}
                                className="hover:text-blue-400 transition"
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}