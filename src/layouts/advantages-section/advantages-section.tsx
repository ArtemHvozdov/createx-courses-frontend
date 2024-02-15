import './advantages-section.css';
import AdvantagesImages from './../../assets/who-we-are-img.png'

function AdvantagesSection() {
    return (
        <section className="advantages__section">
            <div className="container">
                <div className="advantages__section-inner">
                    <div className="inner__item-left">
                        <img src={AdvantagesImages} alt="" className="advantages__section-img" />
                    </div>
                    <div className="inner__item-right">
                        <div className="advantages__head-tittle">Who we are</div>
                        <div className="advantages__head">Why Createx?</div>
                        <ul className="advantages__list">
                            <li className="advantages__list-item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                            <li className="advantages__list-item">Vulputate placerat amet pulvinar lorem nisl.</li>
                            <li className="advantages__list-item">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                            <li className="advantages__list-item">Etiam duis lobortis in fames ultrices commodo nibh.</li>
                            <li className="advantages__list-item">Tincidunt sagittis neque sem ac eget.</li>
                            <li className="advantages__list-item">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
                        </ul>
                        <button className="advantages__section-btn">More about us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvantagesSection;