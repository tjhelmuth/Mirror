import add from './print';
import $ from 'jquery'

$(() => {
    const sizeTabs = $("#size .tabs li");
    sizeTabs.click((event) => {
        const a = $(event.target);
        const tab = a.closest('li');
        sizeTabs.removeClass("is-active");
        $(tab).addClass('is-active');
    });

    const colors = $(".colors li");
    colors.click((event) => {
        colors.each((index, li) => {
            console.log(li);
            $(li).removeClass("active");
        });

        const li = $(event.target).closest('li');
        const color = li.find('input').val();
        const colorVal = li.find('span').css('background-color');
        li.addClass("active");
        $("#color-title").text(color);
        $("#color-title").css('cssText', "color: " + colorVal + " !important");
    });



    
    
    const popup = $("#schedule");
    const popupBtn = $("#btnAppointment");
    popupBtn.click(() => {
        popup.css('visibility', 'visible');
    });

    $("#btnCloseSchedule").click(() => {
        // popup.fadeOut();
        popup.css('visibility', 'hidden');
    });
});

