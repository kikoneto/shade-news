import { useState, createContext, useContext, useEffect } from "react";

import { getAll, getById } from '../services/newsService';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        getAll()
            .then(res => setNews(Object.values(res)))
    }, [])

    return (
        <NewsContext.Provider value={{ news, getById }}>
            {children}
        </NewsContext.Provider>
    )
}

export const useNews = () => {
    const newsContext = useContext(NewsContext);

    return newsContext;
}