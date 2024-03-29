import './App.css'
import AdvantagesSection from './layouts/advantages-section/advantages-section'
import FeaturedCoursesSection from './layouts/featured-courses-section/featured-courses-section'
import Footer from './layouts/footer/footer'
import Header from './layouts/header/header'
import MainScreen from './layouts/main-screen/main-screen'

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <MainScreen />
                <AdvantagesSection />
                <FeaturedCoursesSection />
            </main>
            <Footer />
        </div>
  )
}

export default App
