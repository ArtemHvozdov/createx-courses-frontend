import './featured-courses-section.css';
import CourseCard from './course-card/course-card';
import coursesData from './../../data/courses.json';
// import Img1 from './../../assets/course-mentors-img/mentor-google-ads-training-cours.png';
// import Img2 from './../../assets/course-mentors-img/mentor-product-managment-fundamentals.png';
// import Img3 from './../../assets/course-mentors-img/mentor-hr-management-analutics.png';
// import Img4 from './../../assets/course-mentors-img/mentor-brand-management-pr-communitcations.png';
// import Img5 from './../../assets/course-mentors-img/mentor-business-development-management.png';
// import Img6 from './../../assets/course-mentors-img/mentor-graphic-design-basic.png';

function FeaturedCoursesSection() {
    return (
        <section className="featured__courses__section">
            <div className="container">
                <div className="featured__courses__section-inner">
                    <div className="featured__courses-tittle">
                        <div className="courses__tittle-headers">
                            <div className="tittle__head-secondary">Ready to learn?</div>
                            <div className="tittle_head-main">Featured Courses</div>
                        </div>
                        <button className="courses__tittle-btn">View all courses</button>
                    </div>
                   
                    <div className="featured__courses-catalog">

                    {coursesData.map(course => (
        <CourseCard
          key={course.id}
          category={course.category}
          tittle={course.tittle}
          price={course.price}
          author={course.author}
          img={course.img}
        />
      ))}

                        {/* <div className="courses__catalog-item">
                            <img src={Img1} alt="" className="catalog__item-img" />
                            <div className="catalog__item-info">
                                <span className="item__info-category">Marketing</span>
                                <div className="item__info-tittle">The Ultimate Google Ads Training Course</div>
                                <div className="item__info-price-mentor">
                                    <div className="item__info-price">$100</div>
                                    <div className="delimiter">|</div>
                                    <div className="item__info-mentor">by Jerome Bell</div>
                                </div>
                            </div>                            
                        </div>
                        
                        <div className="courses__catalog-item">
                            <img src={Img2} alt="" className="catalog__item-img" />
                            <div className="catalog__item-info">
                                <span className="item__info-category">Management</span>
                                <div className="item__info-tittle">Product Management Fundamentals</div>
                                <div className="item__info-price-mentor">
                                    <div className="item__info-price">$480</div>
                                    <div className="delimiter">|</div>
                                    <div className="item__info-mentor">by Marvin McKinney</div>
                                </div>
                            </div> 
                        </div>
                        
                        <div className="courses__catalog-item">
                            <img src={Img3} alt="" className="catalog__item-img" />
                            <div className="catalog__item-info">
                                <span className="item__info-category">HR & Recruting</span>
                                <div className="item__info-tittle">HR  Management and Analytics</div>
                                <div className="item__info-price-mentor">
                                    <div className="item__info-price">$200</div>
                                    <div className="delimiter">|</div>
                                    <div className="item__info-mentor">by Leslie Alexander Li</div>
                                </div>
                            </div> 
                        </div>
                        <div className="courses__catalog-item">
                            <img src={Img4} alt="" className="catalog__item-img" />
                            <div className="catalog__item-info">
                                <span className="item__info-category">Marketing</span>
                                <div className="item__info-tittle">Brand Management & PR Communications</div>
                                <div className="item__info-price-mentor">
                                    <div className="item__info-price">$530</div>
                                    <div className="delimiter">|</div>
                                    <div className="item__info-mentor">by Kristin Watson</div>
                                </div>
                            </div> 
                        </div>
                        <div className="courses__catalog-item">
                            <img src={Img5} alt="" className="catalog__item-img" />
                            <div className="catalog__item-info">
                                <span className="item__info-category">Management</span>
                                <div className="item__info-tittle">Business Development Management</div>
                                <div className="item__info-price-mentor">
                                    <div className="item__info-price">$400</div>
                                    <div className="delimiter">|</div>
                                    <div className="item__info-mentor">by Dianne Russel</div>
                                </div>
                            </div> 
                        </div>
                        <div className="courses__catalog-item">
                            <img src={Img6} alt="" className="catalog__item-img" />
                            <div className="catalog__item-info">
                                <span className="item__info-category">Design</span>
                                <div className="item__info-tittle">Graphic Design Basic</div>
                                <div className="item__info-price-mentor">
                                    <div className="item__info-price">$500</div>
                                    <div className="delimiter">|</div>
                                    <div className="item__info-mentor">by Guy Hawkins</div>
                                </div>
                            </div> 
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCoursesSection;