import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const contacts =
      JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.push(formData);

    localStorage.setItem(
      "contacts",
      JSON.stringify(contacts)
    );

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-500 mt-3">
          We'd love to hear from you. Send us a message and we'll get back to
          you soon.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Send a Message
          </h2>

          {success && (
            <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
              Message sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              required
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              required
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-5">
          <div className="border rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <LocationOnIcon className="text-blue-600" />
            <div>
              <h3 className="font-bold">Address</h3>
              <p className="text-gray-600">
                Sector 44, Gurugram, Haryana, India
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <EmailIcon className="text-blue-600" />
            <div>
              <h3 className="font-bold">Email</h3>
              <p className="text-gray-600">
                contact@learnhub.com
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <PhoneIcon className="text-blue-600" />
            <div>
              <h3 className="font-bold">Phone</h3>
              <p className="text-gray-600">
                +91 9876543210
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <AccessTimeIcon className="text-blue-600" />
            <div>
               <h3 className="font-bold">Working Hours</h3>
                <p className="text-gray-600">
                    Mon - Sat : 9:00 AM - 7:00 PM
                </p>      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;