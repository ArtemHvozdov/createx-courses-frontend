import Button from "../../../components/button/button";
import './header-buttons-section.css'

function HeaderButtonsSection() {
    return (
        <div className="header__btn-section">
            <Button 
                className='btn__consultation' 
                btnText='Get consultation'
            />
            <Button 
                className='btn-reg-log'
                btnText='Login in / Register'
            />
        </div>
    )
}

export default HeaderButtonsSection;