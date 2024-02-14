import './main-screen.css'
import mainScreenImage from './../../assets/main-screen-img.svg'
import btnPlayIcon from './../../assets/icons/btn-play.svg'
import Button from '../../components/button/button';
import Text from '../../components/text/text';

function MainScreen() {
    return (
        <section className='main__screen'>
            <div className="container">
                <div className="main__screen-inner">
                    <div className="main-img-head_section">
                        <div className="main__left-item">
                            <div className="play__btn-section">
                                <Button 
                                    className='main__screen-btn-play'
                                    btnText=''
                                >
                                    <img src={btnPlayIcon} alt="" />
                                </Button>
                                <Text 
                                    className='play__btn-head'
                                    text='Play showreel'
                                />
                            </div>

                            <h1 className='main__screen-head'>
                                Enjoy studying<br></br>
                                with Createx<br></br> Online Courses
                            </h1>

                            <div className="main__button-section">
                                <Button
                                    btnText='About us'
                                    className='main__button-about-us'
                                />
                                <Button
                                    className='main__button-courses'
                                    btnText='Explore courses'
                                />
                            </div>
                        </div>
                        <div className="main__right-item">
                            <img src={mainScreenImage} alt="" />
                        </div>
                    </div>
                    <div className="statistic__section">
                        <div className="statistic__section-item">
                            <div className="statistic__item-number">1200</div>
                            <Text className='statistic__item-info' text='Students graduated'/>
                        </div>
                        <div className="dote__item"></div>
                        <div className="statistic__section-item">
                            <div className="statistic__item-number">84</div>
                            <Text className='statistic__item-info' text='Completed courses'/>
                        </div>
                        <div className="dote__item"></div>
                        <div className="statistic__section-item">
                            <div className="statistic__item-number">16</div>
                            <Text className='statistic__item-info' text='Qualified tutors'/>
                        </div>
                        <div className="dote__item"></div>
                        <div className="statistic__section-item">
                            <div className="statistic__item-number">5</div>
                            <Text className='statistic__item-info' text='Years of experience'/>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default MainScreen;