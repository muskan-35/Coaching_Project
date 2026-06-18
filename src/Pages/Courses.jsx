import { Course } from "../Data/Course"
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupIcon from '@mui/icons-material/Group';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Courses(){
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const filteredCourses = useMemo(() =>
        Course.filter(
            (course) =>
                course.title.toLowerCase().includes(search.toLowerCase())||
                 course.category.toLowerCase().includes(search.toLowerCase()) ||
                 course.summary.toLowerCase().includes(search.toLowerCase())
        ),
        [search]
    );
    return(
        <>
            {/* Courses Section */}
            <section className="max-w-7xl m-auto px-6">

                {/* Heading and Search Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 my-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Find Your Course</h2>
                        <p className="text-slate-400 mt-2">Filter by Category or search for a specific Course</p>
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full lg:w-115">
                        <SearchIcon className="absolute left-4 top-1/4 text-slate-400"/>
                        <input 
                        type="text"
                        placeholder="Search for a course"
                        className="w-full rounded-full border px-12 py-3 text-sm text-yellow-800 placeholder:text-slate-400"
                        value={search}
                        onChange={(e)=> setSearch(e.target.value)}
                        />
                    </div>

                  
                </div>

                {/* Course Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                    {filteredCourses.map((cours) => (
                        /* Single Course Card */
                    <div
                        key={cours.id}
                        className="border border-slate-200 rounded-xl w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                         {/* Course Image */}
                        <img
                            src={cours.image}
                            alt={cours.title}
                            className="h-52 w-full object-cover rounded-t-xl"
                        />

                        {/* Course Details */}
                        <div className="p-5">

                            {/* Course Title */}
                            <h2 className="text-xl font-bold mt-3">
                                {cours.title}
                            </h2>

                            {/* Course Summary */}
                            <p>{cours.summary}</p>

                            {/* Category and Level */}
                            <div className="flex gap-2 mt-3">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                    {cours.category}
                                </span>
                                <span  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                    {cours.level}
                                </span>
                            </div>

                            {/* Duration and Lessons */}
                            <div className="flex gap-3 mt-2">
                                <span className="flex items-center gap-1">
                                    <AccessTimeFilledIcon fontSize="small" className="text-blue-500 " />
                                    {cours.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                    <AutoStoriesIcon fontSize="small" className="text-green-500" />
                                    {cours.lessons} lessons
                                </span>
                            </div>

                            {/* Rating and Students */}
                            <div className="flex gap-3 mt-2">
                                <span className="flex items-center gap-1">
                                    <StarIcon fontSize="small" className="text-yellow-500" />
                                    {cours.rating}
                                </span>
                                <span className="flex items-center gap-1">
                                    <GroupIcon fontSize="small" className="text-purple-500" />
                                    {cours.students} students
                                </span>
                            </div>

                            {/* Course Price */}
                            <h3 className="mt-4 font-bold text-lg text-green-600 flex items-center">
                                <CurrencyRupeeSharpIcon fontSize="small" />
                                {cours.price}
                            </h3>

                            {/* Enroll Button */}
                            <button
                                onClick={() => navigate(`/course/${cours.id}`)}
                                className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Enroll Now
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Courses