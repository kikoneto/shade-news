import '../NewsForms.css';

import { useNavigate } from 'react-router-dom';

import { articleValidation } from '../../../services/formsValidation';

import { useAuth } from '../../../contexts/authContext';
import { useNews } from '../../../contexts/newsContext';

import { isAuth } from '../../../hoc/isAuth';


const Create = () => {

    const navigate = useNavigate();
    const { user } = useAuth();
    const { createNews } = useNews();

    const onCreateHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let title = form.get('title');
        let shortArticle = form.get('short_article');
        let fullArticle = form.get('full_article');
        let imageUrl = form.get('image_url');
        let topic = form.get('topic');

        const valid = articleValidation(title, shortArticle, fullArticle, imageUrl, topic, true);

        const post = {
            imageUrl,
            topic,
            "avatarUrl": user.avatarUrl,
            "gender": user.gender,
            "email": user.email,
            "full_article": fullArticle,
            "short_article": shortArticle,
            title,
            "comments": {
                "comment_one": {
                    "email": "kikoner81@gmail.com",
                    "avatarUrl": "https://robohash.org/sapientenihilquaerat.png?size=50x50&set=set1",
                    "gender": "Male",
                    "content": "Very nice information, I didn't expect it :D"
                },
                "comment_two": {
                    "email": "ema21@gmail.com",
                    "avatarUrl": "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/7f/7f5c639dacc0fa8a64c6b95000bd1487ec4ab013.jpg",
                    "gender": "Female",
                    "content": "Can you believe on such an information??"
                },
                "comment_three": {
                    "email": "coolGuy@yahoo.com",
                    "avatarUrl": "https://avatars.steamstatic.com/4836ce8ca6d0667b6642dda9575bf2f1cc90956a.jpg",
                    "gender": "Male",
                    "content": "I Love this website, and it's content! :)"
                }
            }
        }

        if (valid) {
            createNews(post, user.accessToken);
            navigate('/');
        }
    }

    return (
        <section className="create-section">
            <div className="create-form-container news-form-container">
                <h1>Create News</h1>
                <form className="create-form news-form" onSubmit={onCreateHandler}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" />
                    <label htmlFor="full_article">Full Article</label>
                    <input type="text" name="full_article" placeholder="Word limit 110" />
                    <label htmlFor="short_article">Short Version of the Article</label>
                    <input type="text" name="short_article" placeholder="Word limit 25" />
                    <label htmlFor="image_url">Image URL</label>
                    <input type="text" name="image_url"
                        placeholder="exmp: https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRETW7ZQwdE8/v1/800x-1.jpg" />
                    <label htmlFor="topic">Topic</label>
                    <select className="topic" name="topic">
                        <option value="technology">Technology</option>
                        <option value="sport">Sport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="science">Science</option>
                        <option value="business">Business</option>
                        <option value="marketing">Marketing</option>
                    </select>
                    <input type="submit" value="Create" />
                </form>
            </div>
        </section>
    );
}

export const ProtectedCreate = isAuth(Create);