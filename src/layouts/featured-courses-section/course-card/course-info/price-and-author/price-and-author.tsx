import './price-and-author.css';
import Text from '../../../../../components/text/text';

interface PriceAndAuthorProps {
    className: string;
    price: string;
    author: string;
}

function PriceAndAuthor(props: PriceAndAuthorProps) {
    return (
        <div className={props.className}>
            <Text 
                className="item__info-price"
                text={props.price}
            />
            <div className="delimiter">|</div>
            <Text 
                className='item__info-mentor'
                text={props.author}
            />
        </div>
    )
}

export default PriceAndAuthor