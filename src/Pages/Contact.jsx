import { Helmet } from "react-helmet-async";
import Cover from "../Components/Shared/Cover";
import bgImg from "../assets/contact/banner.jpg"
import SectionTile from "../Components/Shared/SectionTitle";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {

    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const info = [
        {
            icon: (
                <FaPhoneAlt></FaPhoneAlt>
            ),
            title: "Phone",
            lines: ["+38 (012) 34 56 789"],
        },
        {
            icon: (
                <IoLocationSharp />
            ),
            title: "Address",
            lines: ["123 ABS Street, Uni 21", "Bangladesh"],
        },
        {
            icon: (
                <TfiTimer />
            ),
            title: "Working Hours",
            lines: ["Mon - Fri: 08:00 - 22:00", "Sat - Sun: 10:00 - 23:00"],
        },
    ];

    // Handle Contact From Data
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Send email via EmailJS
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                toast.success("Message sent successfully!");
                formRef.current.reset();
            })
            .catch(() => {
                toast.error("Something went wrong. Try again!");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="max-w-[1350px] mx-auto px-5 md:px-2.5">
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>

            {/* bg img and title */}
            <Cover img={bgImg} title={"CONTACT US"} subTitle={"Would You Like To Try Dish"}>
            </Cover>

            {/* Setion Title */}
            <SectionTile subHeading={"---Visit Us---"} heading={"OUR LOCATION"} />

            {/* Card */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
                {info.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-[#F3F0E8] rounded-xl py-5 px-4 gap-5 hover:shadow-md transition-shadow duration-300"
                    >
                        {/* Icon box */}
                        <div className="w-12 h-12 rounded-full bg-[#BB8506] text-white flex items-center justify-center">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-bold uppercase tracking-[3px] text-[#151515]">
                            {item.title}
                        </h3>

                        {/* Divider */}
                        <div className="w-10 h-px bg-[#BB8506]" />

                        {/* Info lines */}
                        <div className="flex flex-col gap-1">
                            {item.lines.map((line, i) => (
                                <p key={i} className="text-sm text-[#555] leading-relaxed">
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Contact From */}
            <section className="py-16 px-2 md:px-6 max-w-4xl mx-auto">

                {/* Section Title */}
                <SectionTile subHeading={"---Send Us a Message---"} heading={"CONTACT FORM"}/>

                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[#0f0f19] p-10 rounded-2xl border border-white/5 shadow-2xl">

                    {/* Name & Email flex */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name"
                                required
                                className="bg-[#0f0f19] text-white text-sm px-4 py-3 rounded-lg border border-white/10 outline-none focus:border-[#BB8506] transition-all duration-300 placeholder:text-gray-600 focus:shadow-[0_0_10px_rgba(187,133,6,0.2)]"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                placeholder="your@email.com"
                                required
                                autoComplete="email"
                                className="bg-[#0f0f19] text-white text-sm px-4 py-3 rounded-lg border border-white/10 outline-none focus:border-[#BB8506] transition-all duration-300 placeholder:text-gray-600 focus:shadow-[0_0_10px_rgba(187,133,6,0.2)]"
                            />
                        </div>
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+880 1XXX XXXXXX"
                            required
                            className="bg-[#0f0f19] text-white text-sm px-4 py-3 rounded-lg border border-white/10 outline-none focus:border-[#BB8506] transition-all duration-300 placeholder:text-gray-600 focus:shadow-[0_0_10px_rgba(187,133,6,0.2)]"
                        />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="How can we help you?"
                            required
                            rows={5}
                            className="bg-[#0f0f19] text-white text-sm px-4 py-3 rounded-lg border border-white/10 outline-none focus:border-[#BB8506] transition-all duration-300 placeholder:text-gray-600 resize-none focus:shadow-[0_0_10px_rgba(187,133,6,0.2)]"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 rounded-lg text-sm font-bold uppercase tracking-[2px] transition-all duration-500 transform active:scale-[0.98]
                         ${loading
                                ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-white/5"
                                : "bg-[#BB8506] text-white hover:bg-[#d4990b] hover:shadow-[0_5px_20px_rgba(187,133,6,0.4)] shadow-lg"
                            }`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                Sending...
                            </span>
                        ) : (
                            "Send Message"
                        )}
                    </button>

                </form>
            </section>
        </div>
    );
};

export default Contact;