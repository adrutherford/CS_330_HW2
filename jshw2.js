function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'bb320015496b4a7aab9fb1484ffac180'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
            document.getElementById('searchResults').style.visibility = 'visible';
        })
        .fail(function () {
            alert('error');
        });
}

function getTime(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    return `${hours}:${minutes}`;
    
}

function displayTime(){
    const time = getTime();
    $('#currentTime').text(time);
    $('#currentTime').dialog({
        modal: true,
        width: 300,
        height: 200
    });
    document.getElementById('time').style.visibility = 'visible';
}

function feelingLucky(){
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'bb320015496b4a7aab9fb1484ffac180'
        }
    })
        .done(function (data) {
            window.location.href = data.webPages.value[0].url;
        })

    
}


const images = [
    'fishInWater.png', 
    'fishOutWater.png' 
];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
}   

document.getElementById('Title').addEventListener('click', changeBackground);



