import React from "react";
import img17 from "../../assets/course/image17.png";
import img18 from "../../assets/course/image18.png";
import { Link } from "react-router-dom";
const courses = [

    {
        id: 1,
        name: "BBA",
        icon: img18,
        isLink: true,
        path: "https://www.srmcm.ac.in/",
    },
    {
        id: 2,
        name: "MBA",
        icon: img17,
        path: "/department/management",
    },
];
type ProgProps = { images?: string[] };

const Management: React.FC<ProgProps> = ({ images }) => {
    return (
        <div className="program-card-grid">
            {courses.map((item) => (
                item.isLink ? (
                    <a
                        href={item.path}
                        key={item.id}
                        target="_blank"
                        rel="noreferrer"
                        style={{ backgroundImage: `url(${images?.[item.id] ?? item.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        className="program-course-card"
                    >
                        <div className="program-course-card__shade" aria-hidden></div>
                        <div className="program-course-card__title-wrap">
                            <div className="program-course-card__title">{item.name}</div>
                        </div>
                    </a>
                ) : (
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
                )
            ))}
        </div>
    );
};

export default Management;
