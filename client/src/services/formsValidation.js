export const articleValidation = (title, shortArticle, fullArticle, imageUrl, topic, necessary) => {

    // I have implemented necessary because some forms have default values for empty fields such as EDIT
    // But some forms can't tolerate empty fields such as CREATE
    if (necessary) {
        if (!title || !shortArticle || !fullArticle || !imageUrl || !topic) {
            alert('Missing Fields!');
            return false;
        }
    }

    const validTitle = title.split(" ");
    const validShortArticleWords = shortArticle.split(" ");
    const validFullArticleWords = fullArticle.split(" ");

    if (validShortArticleWords.length > 25) {
        alert("Short article is too long (more than 25 words)!");
        return false;
    }

    if (validFullArticleWords.length > 110) {
        alert("Full article is too long (more than 110 words)!");
        return false;
    }

    if (validTitle > 20) {
        alert("Title is too long");
        return false;
    }
    return true

}