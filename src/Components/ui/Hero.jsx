import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        course: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        setSubmitted(false);
    };
    const closeModal = () => setIsModalOpen(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            name: "",
            phone: "",
            course: "",
        });
        setSubmitted(true);
    };

    return (
        <>
            <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 mx-auto max-w-7xl px-5 items-center">
                {/* Text Left */}
                <div className="mt-10">
                    <h1 className="text-blue-800 text-4xl font-bold mb-2">Learn Skills That</h1>
                    <h1 className="text-4xl font-bold mb-2">
                        Actually Get You <span className="text-orange-500 underline">Hired!</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Practical IT courses, expert mentors, live projects, and placement-focused guidance for learners who want a real career path.
                    </p>
                    <div className="mt-8 grid gap-5 sm:grid-cols-1 md:grid-cols-2 font-medium">
                        <button
                            type="button"
                            onClick={openModal}
                            className="group text-1xl px-6 py-2 rounded bg-violet-500 text-white shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-xl active:scale-95"
                        >
                            <span>Book Free Demo Class</span>
                            <i className="fa-solid fa-arrow-right pl-2 text-sm transition-transform duration-200 ease-in-out active:translate-x-2"></i>
                        </button>
                        <button 
                            className="border border-slate-300 text-1xl px-6 py-2 rounded transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-100 hover:text-violet-700 active:scale-95"
                            onClick={() => navigate("/courses")}
                        >
                            <i className="fa-solid fa-book-open pr-6"></i>
                            <span>Explore Courses</span>
                        </button>
                    </div>
                    <div className="mt-8 font-medium grid gap-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <button className="border px-2 py-2 rounded">
                            <i className="fa-regular fa-circle-check text-blue-800 pr-5"></i>
                            <span>Live mentor-led classes</span>
                        </button>
                        <button className="border px-2 py-2 rounded">
                            <i className="fa-regular fa-circle-check text-blue-800 pr-5"></i>
                            <span>Project portfolio</span>
                        </button>
                        <button className="border px-2 py-2 rounded">
                            <i className="fa-regular fa-circle-check text-blue-800 pr-5"></i>
                            <span>Interview practice</span>
                        </button>
                        <button className="border px-2 py-2 rounded">
                            <i className="fa-regular fa-circle-check text-blue-800 pr-5"></i>
                            <span>Placement support</span>
                        </button>
                    </div>
                </div>

                {/* Image Right */}
                <div>
                    <img src="/logo/image.webp" className="h-150" alt="Career growth" />
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
                    <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-2xl">
                        <div className="flex justify-between border-b border-white/50 px-6 py-4">
                            <h2 className="text-2xl font-bold text-slate-900">🎓 Free Career Counselling</h2>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="rounded-full bg-white/80 px-3 py-2 text-gray-600 transition hover:bg-white"
                                aria-label="Close popup"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="grid gap-6 px-6 py-6 md:grid-cols-2">
                            <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-violet-100">
                                <p className="text-lg font-semibold text-slate-900">🚀 Start Your IT Career Today</p>
                                <p className="mt-3 text-sm text-gray-600">Discover the best path for your career with expert guidance and fast support.</p>
                                <div className="mt-5 space-y-3 text-sm text-gray-700">
                                    <p>✓ Expert Guidance</p>
                                    <p>✓ Placement Support</p>
                                    <p>✓ Course & Fee Details</p>
                                    <p>✓ Quick Response</p>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">
                                    Learn in-demand IT skills with practical training, real projects, and placement support.
                                </p>
                            </div>

                            <div className="grid gap-4 rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-violet-100">
                                <div className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                                    Limited Seats Available
                                </div>

                                {submitted ? (
                                    <div className="space-y-4 py-6 text-center">
                                        <p className="text-2xl font-bold text-violet-800">🎉 Request Submitted Successfully!</p>
                                        <p className="text-gray-600">Thank you for contacting us.</p>
                                        <p className="text-gray-600">Our counsellor will call you within 24 hours.</p>
                                        <div className="mt-4 space-y-2 text-sm text-gray-700">
                                            <p>✓ Free Career Guidance</p>
                                            <p>✓ Course Details</p>
                                            <p>✓ Placement Support</p>
                                        </div>
                                        <button
                                            onClick={closeModal}
                                            className="mt-4 rounded-xl bg-violet-500 px-5 py-2 text-white"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="grid gap-4">
                                        <label className="block">
                                            <span className="text-sm font-medium text-gray-700">Full Name</span>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500"
                                                placeholder="Enter your full name"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-sm font-medium text-gray-700">Phone Number</span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500"
                                                placeholder="Enter your phone number"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-sm font-medium text-gray-700">Select Course</span>
                                            <select
                                                name="course"
                                                value={formData.course}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500"
                                            >
                                                <option value="">Choose a course</option>
                                                <option value="frontend-development">Frontend Development</option>
                                                <option value="full-stack-development">Full Stack Development</option>
                                                <option value="react-js">React JS</option>
                                                <option value="java-development">Java Development</option>
                                                <option value="python-development">Python Development</option>
                                            </select>
                                        </label>
                                        <button
                                            type="submit"
                                            className="rounded-2xl bg-violet-500 px-6 py-3 text-white transition hover:bg-violet-600"
                                        >
                                            Request a Callback
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Hero;