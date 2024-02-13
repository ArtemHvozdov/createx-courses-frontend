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
                        
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default MainScreen;