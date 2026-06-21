import { useState } from "react";
import { useNavigate } from "react-router-dom";
// courses
import Courses  from "../../Pages/Courses";


// about section icons
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

// blogs
import { blogs } from "../../Data/BlogData";
import BlogCards from "./BlogCards";
import { Link } from "react-router-dom";

// placement data
import { placementSteps } from "../../Data/PlacementData";
//import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Reviews
import { reviewsData } from "../../Data/ReviewsData"
//import { useNavigate } from "react-router-dom";

// faq
import { faqData } from "../../Data/FaqData";
//import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

    const [openIndex, setOpenIndex] = useState(null);
    const toggleItem = (index) => {
        setOpenIndex(openIndex === index? null : index);
    };


    // Top Company Data
    const partners = [
    { name: "Pearson", logo: "/logo/company/pearson.png" },
    { name: "SAP", logo: "/logo/company/sap.png" },
    { name: "Microsoft", logo: "/logo/company/micro.png" },
    { name: "Google Cloud", logo: "/logo/company/google.png" },
    { name: "AWS", logo: "/logo/company/aws.png" },
    { name: "Kryterion", logo: "/logo/company/kryte.png" },
    { name: "ACT", logo: "/logo/company/act.png" },
    { name: "LanguageCert", logo: "/logo/company/langua.png" },
    { name: "Skills For English", logo: "/logo/company/skills.png" },
    { name: "Salesforce", logo: "/logo/company/sales.png" },
    { name: "Oracle", logo: "/logo/company/oracle.png" },
    { name: "ISO", logo: "/logo/company/iso.png" },
  ];


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

            {/* Popup */}
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

            {/* Courses Section */}
            <section className="py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Popular Courses</h2>
                    <p className="text-slate-500 mt-2">Learn from our top rated courses</p>
                </div>
                
                <Courses limit={3} /> {/* 3. Bas ye line important hai */}

                <div className="text-center mt-10">
                    <Link to="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                        View All Courses →
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-7xl m-auto px-6 py-16 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
                    {/* Left Side - Image */}
                    <div className="relative">
                        <img 
                        src="https://t4.ftcdn.net/jpg/05/19/89/97/360_F_519899761_kH6DsNBvULXhoSN2MVil1IUsRpSTNxvC.jpg" 
                        alt="Dev Tech Institute"
                        className="rounded-2xl shadow-xl w-full h-[550px] object-cover"
                        />
                    </div>

                    {/* Right Side - Text */}
                    <div>
                        <span className="text-blue-600 font-semibold uppercase">Why Dev Tech</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                            Built for <span className="text-blue-600">Job-Ready Learning</span>
                        </h2>
                        <p className="text-slate-600 mb-8">
                            Dev Tech delivers practical, career-focused training with mentorship, live projects, and deep placement support so learners become job-ready with confidence.
                        </p>

                        {/* Features with Icons */}
                        <div className="space-y-5">
                            
                            {/* Point 1 */}
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <VerifiedUserIcon className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">100% Placement Assistance</h3>
                                    <p className="text-slate-600 text-sm">Complete job support with resume building & interview prep</p>
                                </div>
                            </div>

                            {/* Point 2 */}
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <SchoolIcon className="text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">15+ Years Industry Expert Trainers</h3>
                                    <p className="text-slate-600 text-sm">Learn from professionals with real industry experience</p>
                                </div>
                            </div>

                            {/* Point 3 */}
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <AssignmentTurnedInIcon className="text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Hands-On Projects & Real-World Use Cases</h3>
                                    <p className="text-slate-600 text-sm">Build portfolio with live projects used in companies</p>
                                </div>
                            </div>

                            {/* Point 4 */}
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <PsychologyIcon className="text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">AI-Personalized Learning Paths</h3>
                                    <p className="text-slate-600 text-sm">Customized curriculum based on your learning speed</p>
                                </div>
                            </div>

                            {/* Point 5 */}
                            <div className="flex items-start gap-4">
                                <div className="bg-pink-100 p-3 rounded-lg">
                                    <AutoStoriesIcon className="text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">40+ Industry-Relevant Courses</h3>
                                    <p className="text-slate-600 text-sm">Wide range of tech courses updated with market trends</p>
                                </div>
                            </div>

                            {/* Point 6 */}
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-100 p-3 rounded-lg">
                                    <WorkspacePremiumIcon className="text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Global Certifications</h3>
                                    <p className="text-slate-600 text-sm">Get certified with industry-recognized credentials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blogs Section */}
            <section className="max-w-7xl mx-auto px-5 py-16">
                <h2 className="text-4xl font-bold text-center">
                    Latest Blogs
                </h2>

                <p className="text-center text-gray-500 mt-3">
                    Explore our latest learning resources and career insights.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {blogs.slice(0, 3).map((blog) => (
                    <BlogCards key={blog.id} blog={blog} />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Link
                    to="/blog"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                    Explore All Articles →
                    </Link>
                </div>
            </section>

            {/* Top Company Section */}
            <section className="max-w-7xl m-auto px-6 py-16 bg-white">
            
                {/* Top Text */}
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-semibold uppercase">Our Certification Partners</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                        Globally <span className="text-blue-600">Recognized Certifications</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Dev Tech is an authorized training partner with world's leading tech companies. Get certified with industry-recognized credentials that boost your career globally.
                    </p>
                </div>

                {/* Partners Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {partners.map((partner, index) => (
                    <div 
                        key={index}
                        className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center h-28"
                    >
                        <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-10">
                    <p className="text-slate-500 text-sm">
                    * All logos are trademarks of their respective owners
                    </p>
                </div>
            </section>

            {/* Placements Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      
                {/* Top Content */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Start Your Placement Journey
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Our proven 6-step process has helped 500+ students get placed with 6+ LPA average package. Here's how we do it.
                    </p>
                </div>

                {/* Same Card Design - Only 3 Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {placementSteps.slice(0, 3).map((item, index) => {
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

                {/* View All Button */}
                <div className="text-center">
                    <button
                    onClick={() => navigate('/placements')}
                    className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition duration-300"
                    >
                    View All Steps →
                    </button>
                </div>

            </section>

            {/* Reviews Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                <p className="text-violet-600 font-bold uppercase tracking-widest">
                    Student Reviews
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    What Our Students Say
                </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {reviewsData.slice(0, 3).map((review) => (
                    <div
                    key={review.id}
                    className="border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white"
                    >
                    <i className="fa-solid fa-quote-left text-3xl text-violet-200 mb-4"></i>
                    <div className="flex items-center gap-4 mb-5">
                        <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img src={review.img} alt={review.student} className="w-full h-full object-cover" />
                        </div>
                        <div>
                        <h2 className="font-semibold text-lg">{review.student}</h2>
                        <p className="text-green-600 text-sm font-medium">{review.position}</p>
                        <div className="flex items-center gap-1 text-yellow-500 mt-1">
                            {[...Array(review.rating)].map((_, index) => (
                            <i key={index} className="fa-solid fa-star"></i>
                            ))}
                        </div>
                        </div>
                    </div>
                    <p className="text-slate-600 leading-7">{review.text}</p>
                    </div>
                ))}
                </div>

                <div className="text-center">
                <button
                    onClick={() => navigate('/reviews')}
                    className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition"
                >
                    View All Reviews →
                </button>
                </div>
            </section>

            {/* Faq */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-semibold uppercase tracking-wider">FAQ</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    Common Questions
                    </h2>
                </div>

                <div className="space-y-4 max-w-3xl mx-auto">
                    {faqData.slice(0, 5).map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm">
                        <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between p-5 text-left"
                        >
                        <span className="text-lg font-medium text-gray-900">{item.question}</span>
                        <ChevronDown
                            size={22}
                            className={`transition-transform duration-300 ${openIndex === index? "rotate-180" : ""}`}
                        />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index? "max-h-40" : "max-h-0"}`}>
                        <p className="px-5 pb-5 text-gray-600">{item.answer}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Hero;