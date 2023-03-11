const baseUrl = 'http://localhost:3030/data/news';

export const getAll = () => {
    return fetch(`${baseUrl}`)
        .then(res => res.json())
        .catch(err => err.message);
}

export const getById = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
        .catch(err => err.message);
}