import stu1 from "../assets/Reviews/1.png";
import stu4 from "../assets/Reviews/4.png";
import stu2 from "../assets/Reviews/2.png";
import stu5 from "../assets/Reviews/5.png";
import stu3 from "../assets/Reviews/3.png";
import stu6 from "../assets/Reviews/6.png";


function Reviews() {
  const reviews = [
    {
      id: 1,
      student: "Priya Sharma",
      position: "Frontend Developer",
      course: "Full-Stack Web Development",
      img: stu1,
      rating: 5,
      text: "The mock interviews and mentor guidance helped me improve my communication and technical skills. I successfully cleared my first frontend developer interview."
    },
    {
      id: 2,
      student: "Aman Patel",
      position: "Data Analyst",
      course: "Data Science with Python",
      img: stu4,
      rating: 5,
      text: "The interview preparation sessions covered real-world questions and boosted my confidence during placements."
    },
    {
      id: 3,
      student: "Neha Singh",
      position: "UI/UX Designer",
      course: "UI/UX Design Masterclass",
      img: stu3,
      rating: 5,
      text: "I learned how to build projects, create a strong portfolio, and confidently present my work during interviews."
    },
    {
      id: 2,
      student: "Rahul Verma",
      position: "React Developer",
      course: "Frontend Development",
      img: stu5,
      rating: 5,
      text: "The practical assignments and mock interviews prepared me well for technical rounds and helped me secure a job."
    },
    {
      id: 3,
      student: "Anjali Gupta",
      position: "Software Engineer",
      course: "Programming Fundamentals",
      img: stu3,
      rating: 5,
      text: "The mentors were always available to help. The structured learning path made complex topics easy to understand."
    },
    {
      id: 1,
      student: "Vikash Kumar",
      position: "Web Developer",
      course: "Full-Stack Web Development",
      img: stu6,
      rating: 5,
      text: "The career guidance sessions and resume reviews were extremely valuable and helped me stand out in interviews."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-violet-600 font-bold uppercase tracking-widest">
          Student Reviews
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-4">
          What Our Students Say
        </h1>

        <p className="text-slate-500 max-w-2xl mx-auto mt-4">
          Discover how our training programs, mentorship, and interview
          preparation have helped students build successful careers in the IT
          industry.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
        <div className="text-center bg-violet-50 rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-violet-600">500+</h3>
          <p className="text-slate-600 mt-2">Students Trained</p>
        </div>

        <div className="text-center bg-violet-50 rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-violet-600">95%</h3>
          <p className="text-slate-600 mt-2">Placement Success</p>
        </div>

        <div className="text-center bg-violet-50 rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-violet-600">4.9/5</h3>
          <p className="text-slate-600 mt-2">Average Rating</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white"
          >
            <i className="fa-solid fa-quote-left text-3xl text-violet-200 mb-4"></i>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src={review.img}
                  alt={review.student}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  {review.student}
                </h2>

                <p className="text-green-600 text-sm font-medium">
                  {review.position}
                </p>

                <div className="flex items-center gap-1 text-yellow-500 mt-1">
                  {[...Array(review.rating)].map((_, index) => (
                    <i
                      key={index}
                      className="fa-solid fa-star"
                    ></i>
                  ))}
                </div>

                <p className="text-sm text-slate-500 mt-1">
                  {review.course}
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-7">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;