import './NewsCatalog.css';

import { useEffect } from 'react';
import { useNews } from '../../contexts/newsContext';
import { NewsCard } from './NewsCard/NewsCard';

export const NewsCatalog = () => {

    const { news, getAllNews } = useNews();

    useEffect(() => {
        getAllNews();
    }, [news])

    return (

        <section className="news">
            <div className="news-container">
                {
                    news ?
                        news.map(x => <NewsCard currentNews={x} key={x._id} />)
                        : <h1>No News</h1>
                }
            </div>
        </section>
    );
}