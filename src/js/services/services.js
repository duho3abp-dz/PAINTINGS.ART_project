'use strict'
const _url = 'http://localhost:3000/';

const postData = async (path, body) => {
    const resp = await fetch(`${_url}${path}`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (!resp.ok) throw new Error(`Could not fetch ${_url}, status: ${resp.status}`);

    return await resp.json();
};

const getData = async path => {
    const resp = await fetch(`${_url}${path}`);

    if (!resp.ok) throw new Error(`Could not fetch ${_url}, status: ${resp.status}`);

    return await resp.json();
};

export { postData, getData };