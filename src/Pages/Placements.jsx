import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placementSteps } from "../Data/PlacementData.jsx";

function Placements(){
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', course: '' });
    const [submitted, setSubmitted] = useState(false);

    const openModal = () => { setIsModalOpen(true); setSubmitted(false); };
    const closeModal = () => setIsModalOpen(false);
    const handleChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); };
    const handleSubmit = (e) => { e.preventDefault(); setFormData({ name: '', phone: '', course: '' }); setSubmitted(true); };

    return(
        <>
            <div className="bg-white">
                {/* Placement Heading */}
                <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
                            Placement Success Stories
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our students land dream jobs at top companies. Get guided by industry experts and secure your future with our proven placement program.
                        </p>
                    </div>
                </section>

                {/* Stats Cards */}
                <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-5xl font-bold text-blue-600">500+</h2>
                            <p className="mt-3 text-slate-700 font-semibold">Students Placed</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-5xl font-bold text-purple-600">85%</h2>
                            <p className="mt-3 text-slate-700 font-semibold">Placement Rate</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-5xl font-bold text-green-600">6+ LPA</h2>
                            <p className="mt-3 text-slate-700 font-semibold">Avg Package</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-5xl font-bold text-orange-600">50+</h2>
                            <p className="mt-3 text-slate-700 font-semibold">Company Partners</p>
                        </div>
                    </div>
                </section>

                {/* placement cards */}
                <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
                        Our Complete Placement Journey
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {placementSteps.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                            key={index}
                            className="group relative bg-white border border-slate-100 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                            {/* Step Badge */}
                            <div
                                className={`w-14 h-14 flex items-center justify-center rounded-xl text-white font-bold text-lg bg-gradient-to-r ${item.color} shadow-lg`}
                            >
                                {item.step}
                            </div>

                            {/* Icon */}
                            <div className="mt-5">
                                <Icon className="w-8 h-8 text-slate-700" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mt-5 group-hover:text-blue-600 transition">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Hover Line */}
                            <div className="mt-5 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 rounded-full"></div>
                            </div>
                        );
                        })}
                    </div>
                </section>


                {/* CTA Placement Card */}
                <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                    <div className="rounded-3xl border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 p-12 text-center space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                            Ready to Boost Your Career?
                        </h2>
                        <p className="text-lg text-slate-700 max-w-xl mx-auto">
                            Join our proven placement program and secure a position at a leading tech company within 6 months.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => navigate('/courses')} className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition duration-300">
                                Start Your Journey
                            </button>
                            <button onClick={openModal} className="rounded-full border-2 border-slate-400 hover:border-blue-600 hover:text-blue-600 text-slate-900 px-8 py-3 font-semibold transition duration-300">
                                Schedule a Demo
                            </button>
                        </div>
                    </div>
                </section>
                
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
                        <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-2xl">
                            <div className="flex justify-between border-b border-white/50 px-6 py-4">
                                <h2 className="text-2xl font-bold text-slate-900">🎓 Book Free Demo Class</h2>
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
                                    <p className="text-lg font-semibold text-slate-900">🚀 Book Your Free Demo Class</p>
                                    <p className="mt-3 text-sm text-gray-600">Speak with our team and reserve your free demo session to explore the course.</p>
                                    <div className="mt-5 space-y-3 text-sm text-gray-700">
                                        <p>✓ Expert Guidance</p>
                                        <p>✓ Placement Support</p>
                                        <p>✓ Course & Fee Details</p>
                                        <p>✓ Quick Response</p>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-600">Learn in-demand IT skills with practical training, real projects, and placement support.</p>
                                </div>

                                <div className="grid gap-4 rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-violet-100">
                                    <div className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">Limited Seats Available</div>

                                    {submitted ? (
                                        <div className="space-y-4 py-6 text-center">
                                            <p className="text-2xl font-bold text-violet-800">🎉 Request Submitted Successfully!</p>
                                            <p className="text-gray-600">Thank you for contacting us.</p>
                                            <p className="text-gray-600">Our counsellor will call you within 24 hours.</p>
                                            <button onClick={closeModal} className="mt-4 rounded-xl bg-violet-500 px-5 py-2 text-white">Close</button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="grid gap-4">
                                            <label className="block">
                                                <span className="text-sm font-medium text-gray-700">Full Name</span>
                                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500" placeholder="Enter your full name" />
                                            </label>
                                            <label className="block">
                                                <span className="text-sm font-medium text-gray-700">Phone Number</span>
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-violet-500" placeholder="Enter your phone number" />
                                            </label>
                                            <label className="block">
                                                <span className="text-sm font-medium text-gray-700">Select Course</span>
                                                <select name="course" value={formData.course} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500">
                                                    <option value="">Choose a course</option>
                                                    <option value="frontend-development">Frontend Development</option>
                                                    <option value="full-stack-development">Full Stack Development</option>
                                                    <option value="react-js">React JS</option>
                                                    <option value="java-development">Java Development</option>
                                                    <option value="python-development">Python Development</option>
                                                </select>
                                            </label>
                                            <button type="submit" className="rounded-2xl bg-violet-500 px-6 py-3 text-white transition hover:bg-violet-600">Request a Callback</button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default Placements