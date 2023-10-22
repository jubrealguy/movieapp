import headerlogo from '../img/tv.png'
import imdb from '../img/imdb.png'
import rotten from '../img/rotten.png'
import play from '../img/play.png'
import menu from '../img/menu.png'
import search from '../img/Search.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='nav'>
                <h1 className='nav__head'>
                    <img className='nav__head--logo' src={headerlogo} alt='app-logo' />
                    <span className='nav__head--text'>MovieBox</span>
                </h1>
                <form className="nav__search">
                    <input type="text" className="nav__search--input" placeholder='What do you want to watch' />
                    <a href="##" className="nav__search--btn"><img src={search} alt='' /></a>
                </form>
                <div className='nav__sign'>
                    <a className='nav__sign--text' href='##'>Sign in</a>
                    <img src={menu} alt='' className='nav__sign--menu' />
                </div>
            </div>
            <div className='description'>
                <h2 className='description__head'>John Wick 3 : Parabellum</h2>
                <div className='description__details'>
                    <div className='description__details1'>
                        <img alt='' src={imdb} className='description__details1--img' />
                        <span className='description__details1--text'>86.0 / 100</span>
                    </div>
                    <div className='description__details2'>
                        <img alt='' src={rotten} className='description__details2--img' />
                        <span className='description__details2--text'>97%</span>
                    </div>
                </div>
                <p className='description__story'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <a href='##' className='description__link'><img alt='' src={play} /><span>Watch Trailer</span></a>
            </div>
        </header>
    )
}

export default Header;