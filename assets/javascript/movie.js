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
  queryURL="https://api.themoviedb.org/3/discover/movie?primary_release_date.lte=2018-10-16&primary_release_date.gte=2018-8-01&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){  
    console.log(response);
    for (var x = 0; x < 4; x++){
      if(response.results[x].poster_path !== null){
        $('.second-section1').append("<img src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('.second-section1').append(response.results[x].title);
      }
      console.log('hi')
    }
    for (var x = 4; x < 8; x++){
      if(response.results[x].poster_path !== null){
        $('.second-section2').append("<img src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('.second-section2').append(response.results[x].title);
      }
      console.log('hey')
    }
    for (var x = 8; x < 12; x++){
      if(response.results[x].poster_path !== null){
        $('.second-section3').append("<img src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('.second-section3').append(response.results[x].title);
      }
      console.log('bye')
    }
});

  // Pagination for Now Playing 
  $('.part1').on('click', function(){
    $('.second-section1').css('display', 'inline-block');
    $('.second-section2').css('display', 'none');
    $('.second-section3').css('display', 'none');
  })
  $('.part2').on('click', function(){
    // console.log('working');
    $('.second-section1').css('display', 'none');
    $('.second-section2').css('display', 'inline-block');
    $('.second-section3').css('display', 'none');
  })
  $('.part3').on('click', function(){
    // console.log('works');
    $('.second-section1').css('display', 'none');
    $('.second-section2').css('display', 'none');
    $('.second-section3').css('display', 'inline-block');
  })

  // Generate Movie Posters & Title to 'Coming Soon'
  apiKey="1d04e76fc51c2c152a4e8afb75a23a2a";
  queryURL="https://api.themoviedb.org/3/discover/movie?primary_release_date.lte=2018-12-31&primary_release_date.gte=2018-10-16&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){  
    console.log(response);
    for (var x = 0; x < 5; x++){
      if(response.results[x].poster_path !== null){
        $('.third-section1').append("<img src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('.third-section1').append(response.results[x].title);
      }
    }
    for (var x = 5; x < 9; x++){
      if(response.results[x].poster_path !== null){
        $('.third-section2').append("<img src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('.third-section2').append(response.results[x].title);
      }
    }
    for (var x = 9; x < 13; x++){
      if(response.results[x].poster_path !== null){
        $('.third-section3').append("<img src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('.third-section3').append(response.results[x].title);
      }
    }
  });

    // Pagination for Coming Soon 
    $('.part4').on('click', function(){
      $('.third-section1').css('display', 'inline-block');
      $('.third-section2').css('display', 'none');
      $('.third-section3').css('display', 'none');
    })
    $('.part5').on('click', function(){
      // console.log('working');
      $('.third-section1').css('display', 'none');
      $('.third-section2').css('display', 'inline-block');
      $('.third-section3').css('display', 'none');
    })
    $('.part6').on('click', function(){
      // console.log('works');
      $('.third-section1').css('display', 'none');
      $('.third-section2').css('display', 'none');
      $('.third-section3').css('display', 'inline-block');
    })

  // Generate Movie Posters & Titles to 'Top 10 Moives of All Time'
  apiKey="1d04e76fc51c2c152a4e8afb75a23a2a";
  queryURL="https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000&page=1&include_video=false&include_adult=false&language=en-US&api_key=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){  
    console.log(response);
    for (var x = 0; x < 4; x++){    
      if(response.results[x].poster_path !== null){
        $('.fourth-section1').append("<img src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('.fourth-section1').append(response.results[x].title);
      }
    }
    for (var x = 4; x < 8; x++){
      if(response.results[x].poster_path !== null){
        $('.fourth-section2').append("<img src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('.fourth-section2').append(response.results[x].title);
      }
    }    
    for (var x = 8; x < 12; x++){
      if(response.results[x].poster_path !== null){
        $('.fourth-section3').append("<img src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('.fourth-section3').append(response.results[x].title);
      }
    }
  });
    // Pagination for Coming Soon 
    $('.part7').on('click', function(){
      $('.fourth-section1').css('display', 'inline-block');
      $('.fourth-section2').css('display', 'none');
      $('.fourth-section3').css('display', 'none');
    })
    $('.part8').on('click', function(){
      // console.log('working');
      $('.fourth-section1').css('display', 'none');
      $('.fourth-section2').css('display', 'inline-block');
      $('.fourth-section3').css('display', 'none');
    })
    $('.part9').on('click', function(){
      // console.log('works');
      $('.fourth-section1').css('display', 'none');
      $('.fourth-section2').css('display', 'none');
      $('.fourth-section3').css('display', 'inline-block');
    })

});