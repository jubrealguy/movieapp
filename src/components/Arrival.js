import imdb from '../img/imdb.png'
import rotten from '../img/rotten.png'
import CardArrival from '../Data/CardArrival'

const Arrival = () => {
    return (
        <section>
            <div>
                {CardArrival.map((card, index) => (
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

export default Arrival