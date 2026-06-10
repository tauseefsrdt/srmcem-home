import React from "react";
import img19 from "../../assets/course/image19.png";
type ProgProps = { images?: string[] };
import { Link } from "react-router-dom";
const courses = [
    {
        id: 1,
        name: "B.Com",
        icon: img19,
        isLink: true,
        path: "https://www.srmcm.ac.in/",
    },
];
const Commerce: React.FC<ProgProps> = ({ images }) => {
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

export default Commerce;
