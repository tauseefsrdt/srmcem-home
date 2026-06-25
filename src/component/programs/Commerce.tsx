import React from "react";
import img19 from "../../assets/course/image19.png";
import ProgramGrid, { Course } from "./ProgramCard";

const courses: Course[] = [
    { id: 1, name: "B.Com", icon: img19, isLink: true, path: "https://www.srmcm.ac.in/", tags: ["B.Com", "UG"] },
];

type ProgProps = { images?: string[] };

const Commerce: React.FC<ProgProps> = ({ images }) => <ProgramGrid courses={courses} images={images} />;

export default Commerce;
