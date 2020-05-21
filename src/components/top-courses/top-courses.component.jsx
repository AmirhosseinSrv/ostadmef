import React, { useState, useEffect } from "react";
import Title from "../title/title.component";
import { SliderFor } from "../icon/icon.component";
import { Link } from "react-router-dom";
import TopCoursesSlider from "../top-courses-slider/top-courses-slider.component";

import API from "../../helpers/api";
import Loader from "react-loader-spinner";

function TopCourses() {
    const [topCourses, setTopCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        API.get("/course/top")
            .then((response) => {
                setTopCourses(response.data.courses);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <div className="container mx-auto">
                <span className="text-blue-700 text-xl">انتخاب بر اساس</span>
                <div className="">
                    <div className="flex flex-row justify-between items-center">
                        <Title>پرطرفدار‌ترین دوره‌ها</Title>
                        <div className="flex flex-row items-center">
                            <Link to="/courses">
                                <span className="text-blue-1000">
                                    مشاهده همه
                                </span>
                                <SliderFor className="text-blue-1000 pt-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                {isLoading ? (
                    <div className="mx-auto text-center">
                        <Loader
                            type="Triangle"
                            className="inline-block mb-10"
                            color="#ed8936"
                        />
                    </div>
                ) : (
                    <TopCoursesSlider
                        isLoading={isLoading}
                        courses={topCourses}
                    />
                )}
            </div>
        </div>
    );
}

export default TopCourses;
