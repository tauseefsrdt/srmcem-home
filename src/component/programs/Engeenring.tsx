import React from "react";
import img1 from "../../assets/course/image1.png";
import img2 from "../../assets/course/image2.png";
import img3 from "../../assets/course/image3.png";
import img4 from "../../assets/course/image4.png";
import img5 from "../../assets/course/image5.png";
import img6 from "../../assets/course/image6.png";
import img7 from "../../assets/course/image7.png";
import img8 from "../../assets/course/image8.png";
import img9 from "../../assets/course/image9.png";
import img10 from "../../assets/course/image10.png";
import ProgramGrid, { Course } from "./ProgramCard";

const courses: Course[] = [
    { id: 1, name: " Computer Science & Engineering", icon: img1, path: "/department/cse-ai-ml" },
    { id: 2, name: "Computer Science & Engg (AI & ML)", icon: img2, path: "/department/cse-ai-ml" },
    { id: 3, name: "Computer Science & Engg (Data Science)", icon: img3, path: "/department/data-science" },
    { id: 4, name: "Computer Science & Engg (IOT)", icon: img4, path: "/department/iot" },
    { id: 5, name: "Computer Science & Engg (Cyber Security)", icon: img5, path: "/department/cyber-cecurity" },
    { id: 6, name: "Electronic & Communication Engineering", icon: img10, path: "/department/electronics&communication-engineering" },
    { id: 7, name: "Information Technology", icon: img6, path: "/department/it" },
    { id: 8, name: "Mechanical Engineering", icon: img7, path: "/department/mechanical-engineering" },
    { id: 9, name: "Civil Engineering", icon: img8, path: "/department/civil-engineering" },
    { id: 10, name: "Electrical Engineering", icon: img9, path: "/department/electrical-engineering" },
];

type ProgProps = { images?: string[] };

const Engeenring: React.FC<ProgProps> = ({ images }) => <ProgramGrid courses={courses} images={images} />;

export default Engeenring;
