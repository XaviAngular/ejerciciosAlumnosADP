$(document).ready(function() {
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 0 // Creates a dropdown of 15 years to control year
    });
    $('input.autocomplete').autocomplete({
        data: {
            "Barcelona": null,
            "Reus": null,
            "Girona": null,
            "Madrid": null,
            "Santiago de Compostela": null,
            "Hawai": null,
            "Shangai": null,
            "New York": null,
            "Paris": null,
            "Roma": null,
            "Tokyo": null,
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    });
    $("#BuscoViajes").submit(function(event) {
        event.preventDefault();

        var jsonData = JSON.stringify($("#BuscoViajes").serializeArray());
        $.ajax({
            url: 'http://www.travek.com/search',
            type: 'GET',
            dataType: 'json',
            data: 'jsonData',
            .success(function() {
                console.log("campos");
                console.log("valores");
            })
            .error(function() {
                console.log("error");
            })
        });
    });



});
