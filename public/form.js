function fetch(method, url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('fetch is working', url);
            var response = JSON.parse(xhr.responseText);
            callback(response);
        } else {
            console.log('XHR error', xhr.readyState);
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

const searchLocation = document.getElementById('search-location');
const searchText = document.getElementById('search-text');

searchLocation.addEventListener('click', function (e) {
    var input = searchText.value;
    console.log(input);
    fetch('GET', 'search-location&keyword=' + input, function(response) {
    console.log(response);       
    });
});