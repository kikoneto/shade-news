import './NewsDetails.css';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useNews } from '../../contexts/newsContext';
import { useAuth } from '../../contexts/authContext';

import { Comments } from './Comments/Comments';


export const NewsDetails = () => {

    const navigate = useNavigate();
    const { _id } = useParams();
    const { getById, deleteNews } = useNews();
    const { user } = useAuth();

    const [currentNews, setCurrentNews] = useState({});

    useEffect(() => {
        getById(_id).
            then(res => setCurrentNews(res))
    }, [])

    const onDeleteHandler = () => {
        deleteNews(_id, user.accessToken);
        navigate('/');
    }

    let newsDetails = (
        <div className="news-details-container">
            <div className="details-header">
                <h1 className="details-title">{currentNews.title}</h1>
            </div>

            <div className="details">
                <img src={currentNews.imageUrl} />

                <div className="details-text">
                    <h5>{currentNews.full_article}</h5>
                </div>
            </div>

            <Comments comments={currentNews.comments} />
        </div>
    );

    if (user && currentNews) {
        newsDetails = (
            <div className="news-details-container">
                <div className="details-header">
                    <h1 className="details-title">{currentNews.title}</h1>

                    {
                        user._id === currentNews._ownerId ?
                            <div className="details-owner-options">
                                <i className="fa-solid fa-pen" onClick={() => navigate(`/details/${_id}/edit`)}></i>
                                <i className="fa-solid fa-x" onClick={onDeleteHandler}></i>
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
        )
    }

    return (
        <section className="news-details">
            {newsDetails}
        </section>
    );
}