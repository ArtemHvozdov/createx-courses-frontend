import Text from "../../../../components/text/text";
import PriceAndAuthor from "./price-and-author/price-and-author";

interface CourseInfoProps {
    category: string;
    tittle: string;
    price: string;
    author: string;
}

function CourseInfo(props: CourseInfoProps) {
    return (
        <div className="catalog__item-info">
            <Text className="item__info-category" text={props.category}/>
            <Text className="item__info-tittle" text={props.tittle}/>
            <PriceAndAuthor 
                className="item__info-price-mentor"
                price={props.price}
                author={props.author}
            />
        </div>
    )
}

export default CourseInfo;
