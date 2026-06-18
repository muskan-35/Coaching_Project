import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Course } from "../../Data/Course";
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupIcon from '@mui/icons-material/Group';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';

function CoursesDetails() {
    const { id } = useParams();
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

    const course = Course.find((item) => item.id === id);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Course not found</h1>
                    <p className="text-slate-600 mb-6">Please go back and choose a valid course.</p>
                    <button
                        onClick={() => navigate("/courses")}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Back to Courses
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <button
                        onClick={() => navigate("/courses")}
                        className="mb-6 inline-flex items-center gap-2 text-sm text-blue-100 hover:text-white"
                    >
                        ← Back to Courses
                    </button>
                    <h1 className="text-4xl font-bold">{course.title}</h1>
                    <p className="mt-3 text-slate-200 max-w-2xl">{course.summary}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                            <p className="text-slate-600 leading-7">
                                {course.summary} This course is designed to take you from the fundamentals to advanced techniques, building strong practical skills with real-world projects and expert guidance.
                            </p>
                        </section>

                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">What You Will Learn</h2>
                            <ul className="space-y-3 text-slate-600 leading-7 list-disc list-inside">
                                <li>Core programming concepts, syntax, and best practices in Python.</li>
                                <li>How to build practical applications and automation scripts.</li>
                                <li>Data handling, file I/O, and working with APIs.</li>
                                <li>Testing, debugging, and performance optimization.</li>
                                <li>Preparation for real-world development and certification-ready projects.</li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                            <ul className="space-y-3 text-slate-600 leading-7 list-disc list-inside">
                                <li>Basic computer skills and familiarity with the internet.</li>
                                <li>Willingness to learn programming concepts and problem-solving techniques.</li>
                                <li>Access to a laptop or desktop with internet connectivity.</li>
                                <li>No prior Python experience is required for beginner courses; intermediate and advanced learners should have basic programming knowledge.</li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
                            <ul className="space-y-3 text-slate-600 leading-7 list-disc list-inside">
                                <li>Python Developer</li>
                                <li>Data Analyst</li>
                                <li>Automation Engineer</li>
                                <li>Web Developer</li>
                                <li>Machine Learning Engineer</li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Certificate</h2>
                            <p className="text-slate-600 leading-7">
                                After you complete the course, you will receive a certificate of completion that demonstrates your achievement and can be used to enhance your resume and professional profile.
                            </p>
                        </section>
                    </div>

                    <aside className="space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-md">
                            <h3 className="text-xl font-bold mb-4">Course Details</h3>
                            <div className="space-y-3 text-slate-600">
                                <p><strong>Category:</strong> {course.category}</p>
                                <p><strong>Level:</strong> {course.level}</p>
                                <p><strong>Duration:</strong> {course.duration}</p>
                                <p><strong>Lessons:</strong> {course.lessons}</p>
                                <p className="flex items-center gap-2"><StarIcon fontSize="small" className="text-yellow-500" />{course.rating}</p>
                                <p className="flex items-center gap-2"><GroupIcon fontSize="small" className="text-purple-500" />{course.students} students</p>
                                <p className="flex items-center gap-2"><CurrencyRupeeSharpIcon fontSize="small" className="text-green-600" />{course.price}</p>
                            </div>
                        </div>

                        <button
                            onClick={openModal}
                            className="w-full rounded-3xl bg-blue-600 px-6 py-4 text-white font-semibold shadow-lg transition hover:bg-blue-700"
                        >
                            Join Now
                        </button>
                    </aside>
                </div>
            </div>

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
        </div>
    );
}

export default CoursesDetails;
