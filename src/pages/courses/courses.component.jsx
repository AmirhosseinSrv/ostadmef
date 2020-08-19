import React, { useEffect, useState } from "react";
import { useQueryParams, NumberParam, withDefault } from "use-query-params";
import { Helmet } from "react-helmet";

import "./courses.style.scss";

import CourseCard from "../../components/course-card/course-card.component";

import { request } from "../../helpers/api";

import { Link } from "react-router-dom";
import CustomLoader from "../../components/custom-loader/custom-loader.component";
import Title from "../../components/title/title.component";
import { objectToSchema } from "../../helpers/functions";

function Courses(props) {
   const [courses, setCourses] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const [query, setQuery] = useQueryParams({
      page: withDefault(NumberParam, 1),
   });
   const { page } = query;

   useEffect(() => {
      request(`/course?page=${page}`, (resp) => {
         setCourses(resp.data.courses);
         setIsLoading(false);
      });
   }, [query, page]);
   return (
     <div className="container mx-auto">
       <script
         key={`coursesJSON`}
         type="application/ld+json"
         dangerouslySetInnerHTML={{
           __html: JSON.stringify(
             objectToSchema({
               "@context": "http://schema.org",
               "@type": "BreadcrumbList",
               itemListElement: [
                 {
                   "@type": "ListItem",
                   position: 1,
                   item: {
                     "@id": `${process.env.REACT_APP_URL}/`,
                     name: "لینوم",
                     description: "لینوم - پلتفرم آموزشی میکرولرنینگ",
                   },
                 },
                 {
                   "@type": "ListItem",
                   position: 2,
                   item: {
                     "@id": `${process.env.REACT_APP_URL}/courses`,
                     name: "دوره‌های آموزشی",
                     description: "دوره‌های آموزشی کپسولی شده",
                   },
                 },
               ],
             })
           ),
         }}
       />
       <Helmet>
         <title>دوره‌های آموزشی فشرده و کپسولی | لینوم</title>
         <link rel="canonical" href={`${process.env.REACT_APP_URL}/courses`} />
         <meta
           name="description"
           content="لینوم یک پلتفرم آموزشی میکرولرنینگ است که با تکیه بر ویدئو های کپسولی و فشرده ، یادگیری دروس دانشگاهی را در سریع ترین زمان ممکن به ارمغان می آورد."
         />
       </Helmet>
       <div className="mx-auto text-center my-4">
         <Title mainTitle={true}>دوره‌های کپسولی لینوم</Title>
       </div>
       {!isLoading ? (
         <div>
           <div className="flex flex-row flex-wrap mt-5 justify-center">
             {courses.data.map((course, index) => (
               <div className="mx-4 mt-4" key={index}>
                 <CourseCard course={course} />
               </div>
             ))}
           </div>
           <ul className="pagination mx-auto flex flex-row justify-center">
             {courses.prev_page_url && (
               <li className="py-2 px-4 bg-white border border-orange-500 mx-1 rounded">
                 <Link to={`?page=${courses.current_page - 1}`}>قبلی</Link>
               </li>
             )}
             {}
             <li className="py-2 px-4 bg-white border-2 border-orange-500 bg-orange-500 font-bold text-white mx-1 rounded">
               {courses.current_page}
             </li>
             {courses.next_page_url && (
               <li className="py-2 px-4 bg-white border border-orange-500 mx-1 rounded">
                 <Link to={`?page=${courses.current_page + 1}`}>بعدی</Link>
               </li>
             )}
           </ul>
         </div>
       ) : (
         <CustomLoader />
       )}
     </div>
   )
}

export default Courses;
