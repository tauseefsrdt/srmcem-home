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
import { Link } from "react-router-dom";
const courses = [
    {
        id: 1,
        name: " Computer Science & Engineering",
        icon: img1,
        path: "/department/cse-ai-ml",
    },
    {
        id: 2,
        name: "Computer Science & Engg (AI & ML)",
        icon: img2,
        path: "/department/cse-ai-ml",
    },
    {
        id: 3,
        name: "Computer Science & Engg (Data Science)",
        icon: img3,
        path: "/department/data-science",
    },
    {
        id: 4,
        name: "Computer Science & Engg (IOT)",
        icon: img4,
        path: "/department/iot",
    },
    {
        id: 5,
        name: "Computer Science & Engg (Cyber Security)",
        icon: img5,
        path: "/department/cyber-cecurity",
    },
    {
        id: 6,
        name: "Electronic & Communication Engineering",
        icon: img10,
        path: "/department/electronics&communication-engineering",
    },
    {
        id: 7,
        name: "Information Technology",
        icon: img6,
        path: "/department/it",
    },
    {
        id: 8,
        name: "Mechanical Engineering",
        icon: img7,
        path: "/department/mechanical-engineering",
    },
    {
        id: 9,
        name: "Civil Engineering",
        icon: img8,
        path: "/department/civil-engineering",
    },
    {
        id: 10,
        name: "Electrical Engineering",
        icon: img9,
        path: "/department/electrical-engineering",
    },

];

type ProgProps = { images?: string[] };

const Engeenring: React.FC<ProgProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-[repeat(5,minmax(0,202px))] justify-center justify-items-center gap-y-6 gap-x-8 w-full max-[1180px]:grid-cols-[repeat(4,minmax(0,202px))] max-[940px]:grid-cols-[repeat(3,minmax(0,202px))] max-[700px]:grid-cols-[repeat(2,minmax(0,176px))] max-[700px]:gap-y-5 max-[700px]:gap-x-4 max-[390px]:grid-cols-[minmax(0,202px)]">
            {courses.map((item) => (
                <Link
                    to={item.path}
                    key={item.id}
                    style={{ backgroundImage: `url(${images?.[item.id] ?? item.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    className="group relative block w-full max-w-[202px] h-[181px] overflow-hidden border-2 border-[#243f7f] rounded-[18px] bg-cover bg-center cursor-pointer transition-[transform,box-shadow] duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(19,42,91,0.22)] max-[700px]:max-w-[176px] max-[700px]:h-[158px] max-[700px]:rounded-[16px] max-[390px]:max-w-[202px] max-[390px]:h-[181px]"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,28,58,0.18)_0%,rgba(28,55,109,0.68)_100%)]" aria-hidden></div>
                    <div className="absolute left-0 bottom-5 z-[1] w-full border-t border-white/40 border-b border-b-white/[0.22] bg-[rgba(29,58,123,0.74)]">
                        <div className="flex items-center justify-center min-h-[45px] px-[7px] py-2 text-white text-center [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] text-sm font-extrabold leading-[1.28] max-[700px]:text-xs max-[700px]:min-h-[42px]">{item.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Engeenring;
