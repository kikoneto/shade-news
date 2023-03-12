import { useState, createContext, useContext } from "react";

import { getAll, getById, create, edit } from '../services/newsService';

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

    return (
        <NewsContext.Provider value={{ news, getById, createNews, getAllNews, editNews }}>
            {children}
        </NewsContext.Provider>
    )
}

export const useNews = () => {
    const newsContext = useContext(NewsContext);

    return newsContext;
}