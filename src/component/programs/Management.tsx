import React from "react";
import img17 from "../../assets/course/image17.png";
import img18 from "../../assets/course/image18.png";
import ProgramGrid, { Course } from "./ProgramCard";

const courses: Course[] = [
    { id: 1, name: "BBA", icon: img18, isLink: true, path: "https://www.srmcm.ac.in/" },
    { id: 2, name: "MBA", icon: img17, path: "/department/management" },
];

type ProgProps = { images?: string[] };

const Management: React.FC<ProgProps> = ({ images }) => <ProgramGrid courses={courses} images={images} />;

export default Management;
