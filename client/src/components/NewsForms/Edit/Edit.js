import '../NewsForms.css';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useNews } from '../../../contexts/newsContext';
import { useAuth } from '../../../contexts/authContext';

import { isAuth } from '../../../hoc/isAuth';

const Edit = () => {

    const navigate = useNavigate();
    const { _id } = useParams();
    const { getById, editNews } = useNews();
    const { user } = useAuth();


    const [currentNews, setCurrentNews] = useState({});

    useEffect(() => {
        getById(_id)
            .then(res => setCurrentNews(res));
    }, [])

    const onEditHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let title = form.get('title');
        let shortArticle = form.get('short_article');
        let fullArticle = form.get('full_article');
        let imageUrl = form.get('image_url');
        let topic = form.get('topic');

        const post = {
            "title": title ? title : currentNews.title,
            "full_article": fullArticle ? fullArticle : currentNews.full_article,
            "short_article": shortArticle ? shortArticle : currentNews.short_article,
            "imageUrl": imageUrl ? imageUrl : currentNews.imageUrl,
            "topic": topic ? topic : currentNews.topic,
        }

        editNews(currentNews._id, post, user.accessToken);
        navigate('/');
    }

    const editForm = (
        <div className="edit-form-container news-form-container">
            <h1>Edit: {currentNews.title}</h1>
            <form className="edit-form news-form" onSubmit={onEditHandler}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder={currentNews.title} />
                <label htmlFor="full_article">Full Article</label>
                <input type="text" name="full_article" placeholder={currentNews.full_article} />
                <label htmlFor="short_article">Short Version of the Article</label>
                <input type="text" name="short_article" placeholder={currentNews.short_article} />
                <label htmlFor="image_url">Image URL</label>
                <input type="text" name="image_url"
                    placeholder={currentNews.imageUrl} />
                <label htmlFor="topic">Topic</label>
                <select className="topic" name="topic">
                    <option value="Technology">Technology</option>
                    <option value="Sport">Sport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Science">Science</option>
                    <option value="Business">Business</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <input type="submit" value="Edit" />
            </form>
        </div>
    );

    return (
        <section className="edit-section">

            {
                currentNews ?
                    editForm
                    : <h1>Loading</h1>
            }

        </section>
    );
}

export const ProtectedEdit = isAuth(Edit);