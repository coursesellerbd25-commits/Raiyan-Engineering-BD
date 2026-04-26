"use client";

export default function LogoSlider() {
    const logos = [
        "/logos/cp.png",
        "/logos/nestle.png",
        "/logos/uniliver.png",
        "/logos/raiyan.png",
        "/logos/google.png",
    ];

    return (
        <div className="bg-gray-50 py-16 overflow-hidden">

            {/*Heading*/}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Our Global Distributors
                </h2>
                <p className="text-gray-500 mt-2">
                    Trusted partnerships across industries
                </p>
            </div>

            {/*Slider*/}
            <div className="relative">
                <div className="flex animate-logo-scroll gap-12 w-max">

                    {logos.concat(logos).map((logo, index) => (
                        <img 
                            key={index}
                            src={logo}
                            alt="company logo"
                            className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                    ))}

                </div>
            </div>

        </div>
    );
}