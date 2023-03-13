import './NewsCard.css'
import { useNavigate } from 'react-router-dom'

export const NewsCard = ({ currentNews }) => {
    const navigate = useNavigate();

    return (
        <div className="new-box" onClick={() => navigate(`/details/${currentNews._id}`)}>
            <h1>{currentNews.title}</h1>
            <img src={currentNews.imageUrl} alt="" />
            <p>{currentNews.short_article}</p>
        </div>
    )
}