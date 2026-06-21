import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "../Data/FaqData";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    setSubmitted(false);
  };
  const closePopup = () => setIsPopupOpen(false);

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
     <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold uppercase tracking-wider">FAQ</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Find answers to common questions about courses, admissions, payments, certificates, and placements.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
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

      <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <HelpCircle size={40} className="text-white" />
        </div>
        <h3 className="text-2xl font-semibold">
          Still have questions?
        </h3>
        <p className="text-xl">We're here to help! Reach out to our support team and we'll get back to you as soon as possible.</p>
        <button
          type="button"
          onClick={openPopup}
          className="inline-block mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Ask our support team
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-2xl">
            <div className="flex justify-between border-b border-white/50 px-6 py-4">
              <h2 className="text-2xl font-bold text-slate-900">🎓 Free Career Counselling</h2>
              <button
                type="button"
                onClick={closePopup}
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
                    <button
                      onClick={closePopup}
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
    </section>
  );
}

export default Faq;