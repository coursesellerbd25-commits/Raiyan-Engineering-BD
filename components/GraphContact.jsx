"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis, 
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

//Dummy growth data(edit as you like)
const data = [
    { month: "Jan", growth: 56 },
    { month: "Feb", growth: 35 }, 
    { month: "Mar", growth: 50 },
    { month: "Apr", growth: 65 },
    { month: "May", growth: 80 },
    { month: "Jun", growth: 95 },
];

export default function GraphContact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (data.success) {
            alert("Message sent!");
            setForm({ name:"", email: "", message: "" });
        } else {
            alert(data.error || "Error sending message");
        }
    };

    return (
        <section className="w-full bg-black py-20 px-6 flex justify-center">

            <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 items-center">

                {/*Left: Graph*/}
                <motion.div 
                    initial={{ x: -120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full h-[300px]"
                >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Meet Our Growth Graph per Month
                    </h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis dataKey="month" stroke="#aaa" />
                            <YAxis stroke="#aaa" />
                            <Tooltip />
                            <Line 
                                type="monotone"
                                dataKey="growth"
                                stroke="#00ffcc"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>

                {/*Right: Contact form*/}
                <motion.div 
                    initial={{ x: 120, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <form 
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6">

                        <input 
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="bg-transparent border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white transition"
                        />

                        <input 
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="E-mail"
                            className="bg-transparent border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white transition"
                        />

                        <textarea 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Write Your Message Here"
                            className="bg-transparent border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-white transition"
                        ></textarea>

                        <div className="graphContactContainer">
                        <button className="graphContactbounce-btn">
                            Send Now 
                        </button>
                        </div>

                    </form>
                </motion.div>

            </div>
        </section>
    );
}
