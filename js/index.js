var currIndex = 0;
var prevIndex = 0;


const sliderData = [
    {
        image: "img/iPhone1.png",
        header: "View Your Trips",
        content: "Keep track of all your upcoming trips in one place by storing them in-app"
    },
    {
        image: "img/iPhone2.png",
        header: "Add New Trips Easily",
        content: "Create new trips by filling in all the fields, or import existing ones by connecting to your Airbnb account"
    },
    {
        image: "img/iPhone3.png",
        header: "Know Your Trips",
        content: "Get to know the city you're travelling to ahead of time and be prepared. The app provides a variety of concise information about your trip locations"
    },
    {
        image: "img/iPhone4.png",
        header: "Keep Info Handy",
        content: "All your important information is shown in one place for ease of access in case of emergencies, or if you just need a refresher"
    },
    {
        image: "img/iPhone5.png",
        header: "Safety Set-up",
        content: "Arrange check-in times for the app, as well as organizing contacts and a message for them in case of emergency"
    },
    {
        image: "img/iPhone6.png",
        header: "See What's Around",
        content: "Get an idea of what resources are around you, such as 24-hour establishments and bus stops, as well as police stations and hospitals."
    }
]

$(document).ready(function () {
    

    if($(window).width() < 768) {
        $('#sliderInfo').after("<div id='sliderCounter'></div>");
    } else {
        $('#slide').after("<div id='sliderCounter'></div>");
    }
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