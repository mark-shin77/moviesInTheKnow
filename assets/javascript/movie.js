$(document).ready(function(){
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyDw6GM_E3CMyhSf9ErZJJNdY3bEfJyIZvM",
    authDomain: "project1-movies.firebaseapp.com",
    databaseURL: "https://project1-movies.firebaseio.com",
    projectId: "project1-movies",
    storageBucket: "project1-movies.appspot.com",
    messagingSenderId: "175120493064"
  };
  firebase.initializeApp(config);

  // Generate Movie Posters & Title to 'Now Playing'
  apiKey="1d04e76fc51c2c152a4e8afb75a23a2a";
  queryURL="https://api.themoviedb.org/3/discover/movie?primary_release_date.lte=2018-10-16&primary_release_date.gte=2018-8-01&page=1&include_video=true&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){  
    // console.log(response);
    for (var x = 0; x < 4; x++){
      if(response.results[x].poster_path !== null){
        $('#item1').append("<img id='movie1" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie'+ x).addClass('movie-poster-section2');
        $('#movie' + x).attr('data-id', x)
      }
    }
    for (var x = 4; x < 8; x++){
      if(response.results[x].poster_path !== null){
        $('#item2').append("<img id='movie1" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie'+ x).addClass('movie-poster-section2');
        $('#movie' + x).attr('data-id', x)
      }
    }
    for (var x = 8; x < 12; x++){
      if(response.results[x].poster_path !== null){
        $('#item3').append("<img id='movie1" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie1'+ x).addClass('movie-poster-section2');
        $('#movie1' + x).attr('data-id', x)
      }
    }
    $('.movie-poster-section2').on('click', function(){
      console.log('working');
      // Hides Front Page and displays movie info screen
      $('#movie-info-screen').show();
      $('.carousel').css('display', 'none');
      $('.first-page').css('display', 'none');

      var movies = response.results
      var clicked = $(this).attr('data-id');
      // Display Poster
      $('.poster').html("<img id='selected-movie' src='http://image.tmdb.org/t/p/w185/" + movies[clicked].poster_path + "'></img>");
      // Display Title
      $('.title').html(movies[clicked].title);
      // Display Overview
      $('.overview').html('<br>' + movies[clicked].overview);
      // Display Overview
      $('.release-date').html('<br>' + 'Release Date: ' + movies[clicked].release_date);
      // Display Overview
      $('.vote-average').html('<br>' + 'Voters Average: ' + movies[clicked].vote_average);
      // Getting Back to top of the page
      $('html,body').scrollTop(0);
    })

    var movieTitle = response.results[x].title
    apiKey = "AIzaSyAB9orHxZ9-7MUnlwFtmbHcUeaLCcmppTc"
    queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ movieTitle +"trailer&key=" + apiKey;
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(trailer){
      console.log(trailer);
      for(var x = 0; x < 2; x++){
        if(trailer.items[x].id.videoId !== null) {
          var videoInfo = trailer.items[0].id.videoId
          $('#trailer').html("<iframe width='560' height='315' src='https://www.youtube.com/embed/'"+videoInfo+"frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");
        }
      }
    })
    
    var movieTitle = response.results[x].title
    apiKey = "AIzaSyAB9orHxZ9-7MUnlwFtmbHcUeaLCcmppTc"
    queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ movieTitle +"trailer&key=" + apiKey;
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(trailer){
      console.log(trailer);
      for(var x = 0; x < 1; x++){
        if(trailer.items[0].id.videoId !== null) {
          $('#trailer').html("<iframe width='560' height='315' src='https://www.youtube.com/embed/' + trailer.items[x].id frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");
        }
      }
    })
});

  // Pagination for Now Playing 
  $('.part1').on('click', function(){
    $('#item1').css('display', 'flex');
    $('#item2').css('display', 'none');
    $('#item3').css('display', 'none');
  })
  $('.part2').on('click', function(){
    // console.log('working');
    $('#item1').css('display', 'none');
    $('#item2').css('display', 'flex');
    $('#item3').css('display', 'none');
  })
  $('.part3').on('click', function(){
    // console.log('works');
    $('#item1').css('display', 'none');
    $('#item2').css('display', 'none');
    $('#item3').css('display', 'flex');
  })

  // Generate Movie Posters & Title to 'Coming Soon'
  apiKey="1d04e76fc51c2c152a4e8afb75a23a2a";
  queryURL="https://api.themoviedb.org/3/discover/movie?primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-10-16&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){  
    console.log(response);
    for (var x = 0; x < 6; x++){
      if(response.results[x].poster_path !== null){
        $('#item4').append("<img id='movie2" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie2'+ x).addClass('movie-poster-section3');
        $('#movie2' + x).attr('data-id', x)      }
    }
    for (var x = 6; x < 11; x++){
      if(response.results[x].poster_path !== null){
        $('#item5').append("<img id='movie2" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie2'+ x).addClass('movie-poster-section3');
        $('#movie2' + x).attr('data-id', x)
      }
    }
    for (var x = 11; x < 15; x++){
      if(response.results[x].poster_path !== null){
        $('#item6').append("<img id='movie2" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie2'+ x).addClass('movie-poster-section3');
        $('#movie2' + x).attr('data-id', x)
      }
    }

    // on click function for movie posters
    $('.movie-poster-section3').on('click', function(){
      console.log('working');
      // Hides Front Page and displays movie info screen
      $('#movie-info-screen').show();
      $('.carousel').css('display', 'none');
      $('.first-page').css('display', 'none');
  
      var movies = response.results
      var clicked = $(this).attr('data-id');
      // Display Poster
      $('.poster').html("<img src='http://image.tmdb.org/t/p/w185/" + movies[clicked].poster_path + "'></img>");
      // Display Title
      $('.title').html(movies[clicked].title);
      // Display Overview
      $('.overview').html('<br>' + movies[clicked].overview);
      // Display Overview
      $('.release-date').html('<br>' + 'Release Date: ' + movies[clicked].release_date);
      // Display Overview
      $('.vote-average').html('<br>' + 'Voters Average: ' + movies[clicked].vote_average);
      // Getting Back to top of the page
      $('html,body').scrollTop(0);
    })
  });

    // Pagination for Now Playing 
    $('.part4').on('click', function(){
      $('#item4').css('display', 'flex');
      $('#item5').css('display', 'none');
      $('#item6').css('display', 'none');
    })
    $('.part5').on('click', function(){
      // console.log('working');
      $('#item4').css('display', 'none');
      $('#item5').css('display', 'flex');
      $('#item6').css('display', 'none');
    })
    $('.part6').on('click', function(){
      // console.log('works');
      $('#item4').css('display', 'none');
      $('#item5').css('display', 'none');
      $('#item6').css('display', 'flex');
    })

  // Generate Movie Posters & Titles to 'Top 10 Moives of All Time'
  apiKey="1d04e76fc51c2c152a4e8afb75a23a2a";
  queryURL="https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000&page=1&include_video=false&include_adult=false&language=en-US&api_key=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){  
    // console.log(response);
    for (var x = 0; x < 4; x++){    
      if(response.results[x].poster_path !== null){
        $('#item7').append("<img id='movie3" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie3'+ x).addClass('movie-poster-section4');
        $('#movie3' + x).attr('data-id', x)
      }
    }
    for (var x = 4; x < 8; x++){
      if(response.results[x].poster_path !== null){
        $('#item8').append("<img id='movie3" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie3'+ x).addClass('movie-poster-section4');
        $('#movie3' + x).attr('data-id', x)
      }
    }    
    for (var x = 8; x < 12; x++){
      if(response.results[x].poster_path !== null){
        $('#item9').append("<img id='movie3" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie3'+ x).addClass('movie-poster-section4');
        $('#movie3' + x).attr('data-id', x)
      }
    }
    // On click for clicking posters
    $('.movie-poster-section4').on('click', function(){
      console.log('working');
      // Hides Front Page and displays movie info screen
      $('#movie-info-screen').show();
      $('.carousel').css('display', 'none');
      $('.first-page').css('display', 'none');
  
      var movies = response.results
      var clicked = $(this).attr('data-id');
      // Display Poster
      $('.poster').html("<img src='http://image.tmdb.org/t/p/w185/" + movies[clicked].poster_path + "'></img>");
      // Display Title
      $('.title').html(movies[clicked].title);
      // Display Overview
      $('.overview').html('<br>' + movies[clicked].overview);
      // Display Overview
      $('.release-date').html('<br>' + 'Release Date: ' + movies[clicked].release_date);
      // Display Overview
      $('.vote-average').html('<br>' + 'Voters Average: ' + movies[clicked].vote_average);
      // Getting Back to top of the page
      $('html,body').scrollTop(0);
    })
  });

    // Pagination for Now Playing 
    $('.part7').on('click', function(){
      $('#item7').css('display', 'flex');
      $('#item8').css('display', 'none');
      $('#item9').css('display', 'none');
    })
    $('.part8').on('click', function(){
      // console.log('working');
      $('#item7').css('display', 'none');
      $('#item8').css('display', 'flex');
      $('#item9').css('display', 'none');
    })
    $('.part9').on('click', function(){
      // console.log('works');
      $('#item7').css('display', 'none');
      $('#item8').css('display', 'none');
      $('#item9').css('display', 'flex');
    })

    // Reloading Page to displaying deticated section in home screen
    $('#homescreen').on('click', function(){
      window.location.reload(true);
    });
    $('#nowPlaying').on('click', function(){
      window.location.reload(true);
    });
    $("#comingSoon").on('click', function(){
      window.location.reload(true);
    });
    $("#top10").on('click', function(){
      window.location.reload(true);
    });
});