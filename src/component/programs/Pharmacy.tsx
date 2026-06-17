import React from "react";
import img1 from "../../assets/course/image12.png";
import img2 from "../../assets/course/image13.png";
import ProgramGrid, { Course } from "./ProgramCard";

const courses: Course[] = [
    { id: 0, name: "B. Pharm.", icon: img1, path: "/department/pharmacy" },
    { id: 1, name: "D. Pharm.", icon: img2, path: "/department/pharmacy" },
];

type ProgProps = { images?: string[] };

const Pharmacy: React.FC<ProgProps> = ({ images }) => <ProgramGrid courses={courses} images={images} />;

export default Pharmacy;
