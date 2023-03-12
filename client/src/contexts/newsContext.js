import { useState, createContext, useContext } from "react";

import { getAll, getById, create, edit, del } from '../services/newsService';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [news, setNews] = useState([]);

    const getAllNews = () => {
        getAll()
            .then(res => setNews(Object.values(res).reverse()));
    }

    const createNews = (post, accessToken) => {
        create(post, accessToken)
            .then(() => alert('Successful'))
    }

    const editNews = (id, body, accessToken) => {
        edit(id, body, accessToken)
            .then(() => alert('Successful Edit'))
    }

    const deleteNews = (id, accessToken) => {
        del(id, accessToken)
            .then(() => alert('Successful Remove!'))
    }

    return (
        <NewsContext.Provider value={{ news, getById, createNews, getAllNews, editNews, deleteNews}}>
            {children}
        </NewsContext.Provider>
    )
}

export const useNews = () => {
    const newsContext = useContext(NewsContext);

    return newsContext;
}