function get_endpoint(endpoint) {
    fetch('https://jsonplaceholder.typicode.com' + endpoint)
        .then(response => response.json())
        .then(json => console.log(json));
}

export {get_endpoint}