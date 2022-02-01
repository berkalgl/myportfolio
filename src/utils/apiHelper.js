export const Get = (url, successCallback, errorCallback) => {
    return setTimeout( function () {
        fetch(url)
            .then(response => response.json())
            .then(data => successCallback(data))
            .catch((error) => errorCallback(error))
        },2000
    )
}