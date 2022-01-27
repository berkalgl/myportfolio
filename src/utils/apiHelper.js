export async function Get(url, successCallback, errorCallback) {
    await fetch(url)
            .then(response => response.json())
            .then(data => successCallback(data))
            .catch((error) => errorCallback(error));

}