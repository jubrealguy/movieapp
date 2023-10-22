import imdb from '../img/imdb.png'
import rotten from '../img/rotten.png'
import Cardfeature from '../Data/CardFeature'

const Feature = () => {
    return (
        <section>
            <div>
                <h2>featured Movie</h2>
                <a href="##">Show all </a>
            </div>
            <div>
                {Cardfeature.map((card, index) => (
                    <div key={index}>
                        <img src={card.image} alt='' />
                        <p>{card.country} {card.year}</p>
                        <h3>{card.title}</h3>
                        <div>
                            <div>
                                <img alt='' src={imdb} />
                                <span>{card.ratingIMDB} / 100</span>
                            </div>
                            <div >
                                <img alt='' src={rotten} />
                                <span>{card.ratingRotten}</span>
                            </div>
                        </div>
                        <p>{card.genre}</p>
                    </div>
                    ))}
            </div>
        </section>
    )
}

export default Feature