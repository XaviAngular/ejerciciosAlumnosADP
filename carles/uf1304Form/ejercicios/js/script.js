  $(document).ready(function() {
    $('select').material_select();
    Materialize.updateTextFields();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('input.autocomplete').autocomplete({
      data: {
        "Barcelona": 'img/barcelona.jpg',
        "Reus": 'img/reus.jpg',
        "Girona": 'img/girona.jpg',
        "Madrid": 'img/madrid.jpg',
        "Santiago de Componstela": 'img/compostela.jpg',
      },
      limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    });
    $('input.autocomplet').autocomplete({
      data: {
        "Hawai": 'img/hawai.jpg',
        "Shangai": 'img/shangai.jpg',
        "New York": 'img/york.jpg',
        "Paris": 'img/paris.jpg',
        "Tokyo": 'img/tokyo.jpg',
      },
      limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    });
  });
          