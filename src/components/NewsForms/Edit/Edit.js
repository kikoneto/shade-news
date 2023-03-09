import '../NewsForms.css';

export const Edit = () => {
    return (
        <section className="edit-section">
            <div className="edit-form-container news-form-container">
                <h1>Edit: 'Tony Stark Got Pregnant'</h1>
                <form className="edit-form news-form">
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
                    <input type="submit" value="Edit" />
                </form>
            </div>
        </section>
    );
}