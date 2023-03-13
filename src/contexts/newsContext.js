import { useState, createContext, useContext } from "react";

import { getAll, getById, create, edit, del } from '../services/newsService';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [news, setNews] = useState([]);

    const getAllNews = () => {
        getAll()
            .then(res => setNews(Object.values(res).reverse()))
            .catch(err => {
                alert(err.message);
            })
    }

    const createNews = (post, accessToken) => {
        create(post, accessToken)
            .then(() => alert('Successful'))
            .catch(err => {
                alert(err.message);
            });
    }

    const editNews = (id, body, accessToken) => {
        edit(id, body, accessToken)
            .then(() => alert('Successful Edit'))
            .catch(err => {
                alert(err.message);
            });
    }

    const deleteNews = (id, accessToken) => {
        del(id, accessToken)
            .then(() => alert('Successful Remove!'))
            .catch(err => {
                alert(err.message);
            });
    }

    return (
        <NewsContext.Provider value={{ news, getById, createNews, getAllNews, editNews, deleteNews }}>
            {children}
        </NewsContext.Provider>
    )
}

export const useNews = () => {
    const newsContext = useContext(NewsContext);

    return newsContext;
}