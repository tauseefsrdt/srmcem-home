import React from "react";
import img1 from "../../assets/course/image12.png";
import img2 from "../../assets/course/image13.png";
import { Link } from "react-router-dom";
const courses = [
    {
        id: 0,
        name: "B. Pharm.",
        icon: img1,
        path: "/department/pharmacy",
    },
    {
        id: 1,
        name: "D. Pharm.",
        icon: img2,
        path: "/department/pharmacy",
    },
];
type ProgProps = { images?: string[] };

const Pharmacy: React.FC<ProgProps> = ({ images }) => {
    return (
        <div className="program-card-grid">
            {courses.map((item) => (
                <Link
                    to={item.path}
                    key={item.id}
                    style={{ backgroundImage: `url(${images?.[item.id] ?? item.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    className="program-course-card"
                >
                    <div className="program-course-card__shade" aria-hidden></div>
                    <div className="program-course-card__title-wrap">
                        <div className="program-course-card__title">{item.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Pharmacy;
