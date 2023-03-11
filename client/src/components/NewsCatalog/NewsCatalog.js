import './NewsCatalog.css';

import { useNews } from '../../contexts/newsContext';
import { NewsCard } from './NewsCard/NewsCard';

export const NewsCatalog = () => {

    const { news } = useNews();

    return (

        <section className="news">
            <div className="news-container">
                {
                    news.count !== 0 ?
                        news.map(x => <NewsCard currentNews={x} key={x._id} />)
                        : <h1>No News</h1>
                }
            </div>
        </section>
    );
}