const baseUrl = 'https://shadenews-api-softuni-custom.herokuapp.com/data/news';

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

export const create = (post, accessToken) => {
    return fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken,
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .catch(err => err.message);
}

export const edit = (id, body, accessToken) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken,
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(err => err.message);
}

export const del = (id, accessToken) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "X-Authorization": accessToken,
        },
    })
        .then(res => res.json())
        .catch(err => err.message);
}