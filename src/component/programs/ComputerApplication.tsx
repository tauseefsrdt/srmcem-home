import React from "react";
import img15 from "../../assets/course/image15.png";
import img16 from "../../assets/course/image16.png";
import ProgramGrid, { Course } from "./ProgramCard";

const courses: Course[] = [
    { id: 1, name: "BCA", icon: img16, isLink: true, path: "https://www.srmcm.ac.in/", tags: ["BCA", "UG"] },
    { id: 2, name: "MCA", icon: img15, path: "/department/computer-application", tags: ["MCA", "PG"] },
];

type ProgProps = { images?: string[] };

const ComputerApplication: React.FC<ProgProps> = ({ images }) => <ProgramGrid courses={courses} images={images} />;

export default ComputerApplication;
