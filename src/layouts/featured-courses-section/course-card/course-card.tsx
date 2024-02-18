import './course-card.css';
import CourseInfo from './course-info/course-info';

interface CourseCardProps {
    category: string;
    tittle: string;
    price: string;
    author: string;
    img: string;
}

function CourseCard(props: CourseCardProps) {
    return (
        <div className="courses__catalog-item">
            <img src={props.img} alt="" className="catalog__item-img" />
            <CourseInfo 
                category={props.category}
                tittle={props.tittle}
                price={props.price}
                author={props.author}
            />
        </div>
    )
}

export default CourseCard;
