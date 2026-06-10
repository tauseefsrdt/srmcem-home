import React from 'react'
import img15 from "../../assets/course/image15.png";
import img16 from "../../assets/course/image16.png";
type ProgProps = { images?: string[] };
import { Link } from 'react-router-dom';
const courses = [
    {
        id: 1,
        name: "BCA",
        icon: img16,
        isLink: true,
        path: "https://www.srmcm.ac.in/",
    },
    {
        id: 2,
        name: "MCA",
        icon: img15,
        path: "/department/computer-application",
    },
]



const ComputerApplication: React.FC<ProgProps> = ({ images }) => {
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
    )
}

export default ComputerApplication
