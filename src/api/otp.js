

export const OTPApi = async (url, token, body) => {
    const baseUrl = 'https://api.concati.com/otp';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);

    return fetch(baseUrl + url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        redirect: 'follow'
    })
    .then(response => response)
    .then(result => result)
    .catch(error => error);
}