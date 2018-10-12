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
    console.log(response);
    for (var x = 0; x < 4; x++){
      if(response.results[x].poster_path !== null){
        $('#item1').append("<img id='movie1" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#item2').append(response.results[x].title);
        $('#movie'+ x).addClass('movie-poster-section2');
        $('#movie' + x).attr('data-id', x)
      }
    }
    for (var x = 4; x < 8; x++){
      if(response.results[x].poster_path !== null){
        $('#item3').append("<img id='movie1" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#item4').append(response.results[x].title);
        $('#movie'+ x).addClass('movie-poster-section2');
        $('#movie' + x).attr('data-id', x)
      }
    }
    for (var x = 8; x < 12; x++){
      if(response.results[x].poster_path !== null){
        $('#item5').append("<img id='movie1" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#item6').append(response.results[x].title);
        $('#movie1'+ x).addClass('movie-poster-section2');
        $('#movie1' + x).attr('data-id', x)
      }
    }
    $('.movie-poster-section2').on('click', function(){
      console.log('working');
      // Hides Front Page and displays movie info screen
      $('.movie-info-screen').css('display', 'inline-block');
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
    })
  });

  // Pagination for Now Playing 
  $('.part1').on('click', function(){
    $('#item1').css('display', 'inline-block');
    $('#item2').css('display', 'inline-block');
    $('#item3').css('display', 'none');
    $('#item4').css('display', 'none');
    $('#item5').css('display', 'none');
    $('#item6').css('display', 'none');
  })
  $('.part2').on('click', function(){
    // console.log('working');
    $('#item1').css('display', 'none');
    $('#item2').css('display', 'none');
    $('#item3').css('display', 'inline-block');
    $('#item4').css('display', 'inline-block');
    $('#item5').css('display', 'none');
    $('#item6').css('display', 'none');
  })
  $('.part3').on('click', function(){
    // console.log('works');
    $('#item1').css('display', 'none');
    $('#item2').css('display', 'none');
    $('#item3').css('display', 'none');
    $('#item4').css('display', 'none');
    $('#item5').css('display', 'inline-block');
    $('#item6').css('display', 'inline-block');
  })

  // Generate Movie Posters & Title to 'Coming Soon'
  apiKey="1d04e76fc51c2c152a4e8afb75a23a2a";
  queryURL="https://api.themoviedb.org/3/discover/movie?primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-10-16&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){  
    // console.log(response);
    for (var x = 0; x < 5; x++){
      if(response.results[x].poster_path !== null){
        $('#item7').append("<img id='movie2" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#item8').append(response.results[x].title);
        $('#movie2'+ x).addClass('movie-poster-section3');
        $('#movie2' + x).attr('data-id', x)      }
    }
    for (var x = 5; x < 9; x++){
      if(response.results[x].poster_path !== null){
        $('#item9').append("<img id='movie2" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#item10').append(response.results[x].title);
        $('#movie2'+ x).addClass('movie-poster-section3');
        $('#movie2' + x).attr('data-id', x)
      }
    }
    for (var x = 9; x < 13; x++){
      if(response.results[x].poster_path !== null){
        $('#item11').append("<img id='movie2" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#item12').append(response.results[x].title);
        $('#movie2'+ x).addClass('movie-poster-section3');
        $('#movie2' + x).attr('data-id', x)
      }
    }

    // on click function for movie posters
    $('.movie-poster-section3').on('click', function(){
      console.log('working');
      // Hides Front Page and displays movie info screen
      $('.movie-info-screen').css('display', 'inline-block');
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
    })
  });


    // Pagination for Now Playing 
    $('.part4').on('click', function(){
      $('#item7').css('display', 'inline-block');
      $('#item8').css('display', 'inline-block');
      $('#item9').css('display', 'none');
      $('#item10').css('display', 'none');
      $('#item11').css('display', 'none');
      $('#item12').css('display', 'none');
    })
    $('.part5').on('click', function(){
      // console.log('working');
      $('#item7').css('display', 'none');
      $('#item8').css('display', 'none');
      $('#item9').css('display', 'inline-block');
      $('#item10').css('display', 'inline-block');
      $('#item11').css('display', 'none');
      $('#item12').css('display', 'none');
    })
    $('.part6').on('click', function(){
      // console.log('works');
      $('#item7').css('display', 'none');
      $('#item8').css('display', 'none');
      $('#item9').css('display', 'none');
      $('#item10').css('display', 'none');
      $('#item11').css('display', 'inline-block');
      $('#item12').css('display', 'inline-block');
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
        $('#item13').append("<img id='movie3" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#item14').append(response.results[x].title);
        $('#movie3'+ x).addClass('movie-poster-section4');
        $('#movie3' + x).attr('data-id', x)
      }
    }
    for (var x = 4; x < 8; x++){
      if(response.results[x].poster_path !== null){
        $('#item15').append("<img id='movie3" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#item16').append(response.results[x].title);
        $('#movie3'+ x).addClass('movie-poster-section4');
        $('#movie3' + x).attr('data-id', x)
      }
    }    
    for (var x = 8; x < 12; x++){
      if(response.results[x].poster_path !== null){
        $('#item17').append("<img id='movie3" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#item18').append(response.results[x].title);
        $('#movie3'+ x).addClass('movie-poster-section4');
        $('#movie3' + x).attr('data-id', x)
      }
    }
    // On click for clicking posters
    $('.movie-poster-section4').on('click', function(){
      console.log('working');
      // Hides Front Page and displays movie info screen
      $('.movie-info-screen').css('display', 'inline-block');
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
    })
  });
  


    // Pagination for Now Playing 
    $('.part7').on('click', function(){
      $('#item13').css('display', 'inline-block');
      $('#item14').css('display', 'inline-block');
      $('#item15').css('display', 'none');
      $('#item16').css('display', 'none');
      $('#item17').css('display', 'none');
      $('#item18').css('display', 'none');
    })
    $('.part8').on('click', function(){
      // console.log('working');
      $('#item13').css('display', 'none');
      $('#item14').css('display', 'none');
      $('#item15').css('display', 'inline-block');
      $('#item16').css('display', 'inline-block');
      $('#item17').css('display', 'none');
      $('#item18').css('display', 'none');
    })
    $('.part9').on('click', function(){
      // console.log('works');
      $('#item13').css('display', 'none');
      $('#item14').css('display', 'none');
      $('#item15').css('display', 'none');
      $('#item16').css('display', 'none');
      $('#item17').css('display', 'inline-block');
      $('#item18').css('display', 'inline-block');
    })

    $('#homescreen').on('click', function(){
      window.location.reload(true);
    });
});