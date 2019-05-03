var currIndex = 0;
var prevIndex = 0;


const sliderData = [
    {
        image: "img/iPhone1.png",
        header: "Know Your Trips",
        content: "Get to know the city you're travelling to ahead of time and be prepared. The app provides a variety of concise information about your trip locations"
    },
    {
        image: "img/iPhone2.png",
        header: "Header 2",
        content: "Content 2"
    },
    {
        image: "img/iPhone3.png",
        header: "Header 3",
        content: "Content 3"
    }
]

$(document).ready(function () {
    init();

    $('#sliderCounter div').click(function() {
        prevIndex = currIndex;
        currIndex = $(this).index();
        updateSlider();
    })
});

function init() {
    $('#images img').attr('src', sliderData[0].image);
    $('#sliderInfo h4').text(sliderData[0].header);
    $('#sliderInfo p').text(sliderData[0].content);

    sliderData.map((data, key) => {
        let counter = '<div></div>';
        $('#sliderCounter').append(counter);
    });
    $(`#sliderCounter div:eq(${currIndex})`).css('background-color', '#888888');
}

$('#prev').click(function () {
    prevIndex = currIndex;
    currIndex--;
    currIndex = currIndex < 0 ? sliderData.length - 1 : currIndex;
    updateSlider();
})

$('#next').click(function () {
    prevIndex = currIndex;
    currIndex++;
    currIndex = currIndex > sliderData.length - 1 ? 0 : currIndex;
    updateSlider();
})



function updateSlider() {
    $('#sliderCounter div').css('background-color', '#dadada');
    $('#images img').animate({
        'opacity': 0
    }, 50, function() {
        $(this).attr('src', sliderData[currIndex].image).animate({
            'opacity': 1
        });
    });

    $('#sliderInfo').animate({
        'opacity': 0
    }, 50, function() {
        $(this).find('h4').text(sliderData[currIndex].header);
        $(this).find('p').text(sliderData[currIndex].content);
        $(this).animate({
            'opacity': 1
        });
    });

    $(`#sliderCounter div:eq(${currIndex})`).css('background-color', '#888888');
}