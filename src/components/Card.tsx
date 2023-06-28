import { ICard } from '../models';

interface CardProps {
    card: ICard;
}

export default function Card ({ card }: CardProps) {
    return (
        <div className="card card-bottom">
            {card.image? <img src={card.image} className="card-img-top" alt={card.title} /> : null}
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn btn-primary">{card.btnText}</a>
            </div>
        </div>
    );
}