
const postDataAsString = async (url = '', data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'plain/text'
        },
        body: data,
    })

    console.log('response object:', response);

    try {
        return await response.json();
    } catch (e) {
        console.log('error', e);
    }
}

export { postDataAsString }
