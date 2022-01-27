export const Get = (url, successCallback, errorCallback) => {
    return fetch(url)
            .then(response => response.json())
            .then(data => successCallback(data))
            .catch((error) => errorCallback(error));
}