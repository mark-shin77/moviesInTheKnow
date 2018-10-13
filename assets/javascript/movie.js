$(document).ready(function(){
  function handleClick (event){
    var movies = event.data;
    // Hides Front Page and displays movie info screen
    $('#movie-info-screen').show();
    $('.carousel').css('display', 'none');
    $('.first-page').css('display', 'none');

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
    // Hiding Coming Soon / Now Playing / Top 10
    $('#comingSoon').css('display', 'none');
    $('#nowPlaying').css('display', 'none');
    $('#top10').css('display', 'none');
    // Displaying Movie Fun Facts
    var funFacts = [
      "Guardians Of The Galaxy - Chris Pratt apparently stole his Star-Lord costume from the set, for the sole purpose of having it available so he could show up in costume to visit sick children in the hospital, who might want to meet Star-Lord.", 
      "The Theory Of Everything - In an e-mail to director James Marsh about the portrayal by Eddie Redmayne, Stephen Hawking said there were certain points when he thought he was watching himself. In addition to his copyrighted voice, Stephen Hawking also lent the filmmakers his Companion of Honour medal and his signed thesis to use as genuine props in the film.", 
      "Armageddon - NASA shows this film during their management training program. New managers are given the task of trying to spot as many errors as possible. At least one hundred sixty-eight have been found.", 
      "Dallas Buyers Club - The film's budget was so low that the makeup budget was $250. The film's artists were able to work with that, and the film's Makeup and Hairstyling won an Oscar.", 
      "The Godfather - The cat held by Marlon Brando in the opening scene was a stray that Coppola found while on the lot at Paramount, and was not originally called for in the script. So content was the cat that its purring muffled some of Brando's dialogue, and, as a result, most of his lines had to be looped.", 
      "The Matrix - Kung Fu choreographer Woo-Ping Yuen initially refused to work on the film, and hoped that by asking for an exorbitant fee, it would turn off the Wachowskis. It didn't. He next formulated what he considered an impossible request. He said that he'd agree only if he had complete control of the fights, and that he trained the actors for four months before they shoot. The Wachowskis complied with his request.", 
      "Elizabeth: The Golden Age - In the film, when Elizabeth arrives at St. Paul's Cathedral, construction is going on. In real life, St. Paul's actually needed repair work. Director Shekhar Kapur decided to improvise, and gave the workers costumes and period tools to cut real stone that was being installed in the cathedral. The workers in the scene are real-life stonemasons and construction workers.", 
    ]
    var random = funFacts[Math.floor(Math.random()*funFacts.length)];
    for (var i = 0; i < funFacts.length; i++){
      console.log('hi');
      $('.intro').html('Fun Fact!')
      $('.fun-facts').text(random);
    }
    
    var movieTitle = movies[clicked].title
    apiKey = "AIzaSyAB9orHxZ9-7MUnlwFtmbHcUeaLCcmppTc"
    queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ movieTitle +"trailer&key=" + apiKey;
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(trailer){
      console.log(trailer);
      console.log(trailer.items[0].id.videoId); 
      if(trailer.items[0].id.videoId !== null) {
        $('#trailer').html("<iframe width='560' height='315' src='https://www.youtube.com/embed/" + trailer.items[0].id.videoId + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");
      }
    })
  }

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
    $('.movie-poster-section2').on('click', response.results, handleClick);
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

  // var paginationArr = [];
  // $('#previous').on('click', function(){
  //   $().
  // });

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
        $('#item4').append("<img id='movie2" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie2'+ x).addClass('movie-poster-section3');
        $('#movie2' + x).attr('data-id', x)      }
    }
    for (var x = 5; x < 9; x++){
      if(response.results[x].poster_path !== null){
        $('#item5').append("<img id='movie2" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie2'+ x).addClass('movie-poster-section3');
        $('#movie2' + x).attr('data-id', x)
      }
    }
    for (var x = 9; x < 14; x++){
      if(response.results[x].poster_path !== null){
        $('#item6').append("<img id='movie2" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie2'+ x).addClass('movie-poster-section3');
        $('#movie2' + x).attr('data-id', x)
      }
    }

    // on click function for movie posters
    $('.movie-poster-section3').on('click', response.results, handleClick)
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
    for (var x = 4; x < 7; x++){
      if(response.results[x].poster_path !== null){
        $('#item8').append("<img id='movie3" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie3'+ x).addClass('movie-poster-section4');
        $('#movie3' + x).attr('data-id', x)
      }
    }    
    for (var x = 7; x < 10; x++){
      if(response.results[x].poster_path !== null){
        $('#item9').append("<img id='movie3" + x + "' src='http://image.tmdb.org/t/p/w185/" + response.results[x].poster_path + "'></img>");
        $('#movie3'+ x).addClass('movie-poster-section4');
        $('#movie3' + x).attr('data-id', x)
      }
    }
    // On click for clicking posters
    $('.movie-poster-section4').on('click', response.results, handleClick)
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
    // $('#nowPlaying').on('click', function(){
    //   window.location.reload(true);
    // });
    // $("#comingSoon").on('click', function(){
    //   window.location.reload(true);
    // });
    // $("#top10").on('click', function(){
    //   window.location.reload(true);
    // });
});