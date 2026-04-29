"use client";

export default function RealMap() {
    return (
        <section className="w-full bg-black py-20 px-6 flex justify-center">
            <div className="max-w-7xl w-full space-y-10">

                {/*Maps*/}
                <div className="grid md:grid-cols-2 gap-8">

                    {/*Map1*/}
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe 
                            src="https://maps.google.com/maps?q=Chittagong,Bangladesh&z=13&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/*Map2*/}
                    {/*<div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe 
                            src="https://maps.google.com/maps?q=Chittagong,Bangladesh&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>*/}
                
                </div>
            
            </div>
        </section>
    );
}