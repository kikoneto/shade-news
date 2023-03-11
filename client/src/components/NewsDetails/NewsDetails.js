import './NewsDetails.css';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useNews } from '../../contexts/newsContext';

import { Comments } from './Comments/Comments';


export const NewsDetails = () => {

    const navigate = useNavigate();
    const { _id } = useParams();
    const { getById } = useNews();

    const [currentNews, setCurrentNews] = useState({});

    useEffect(() => {
        getById(_id).
            then(res => setCurrentNews(res))
    }, [])

    let isOwner = true;

    return (
        <section className="news-details">
            <div className="news-details-container">
                <div className="details-header">
                    <h1 className="details-title">{currentNews.title}</h1>
                    {
                        isOwner ?
                            <div className="details-owner-options">
                                <i className="fa-solid fa-pen" onClick={() => navigate(`/details/${_id}/edit`)}></i>
                                <i className="fa-solid fa-x"></i>
                            </div>
                            : null
                    }
                </div>

                <div className="details">
                    <img src={currentNews.imageUrl} />

                    <div className="details-text">
                        <h5>{currentNews.full_article}</h5>
                    </div>
                </div>

                <Comments comments={currentNews.comments} />
            </div>
        </section>
    );
}