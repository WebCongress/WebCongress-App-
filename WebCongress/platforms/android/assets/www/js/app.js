angular.module('WApp', ['ionic', 'wapp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.feed', {
      url: "/feed",
      views: {
        'menuContent' :{
          templateUrl: "templates/feed.html",
          controller: 'TwitterCtrl'
        }
      }
    })

    .state('app.news', {
      url: "/news",
      views: {
        'menuContent' :{
          templateUrl: "templates/news.html",
          controller: 'NewsCtrl'
        }
      }
    })

    .state('app.events', {
      url: "/events",
      views: {
        'menuContent' :{
          templateUrl: "templates/events.html",
          controller: 'EventsCtrl'
        }
      }
    })
    .state('app.event', {
      url: "/events/:eventId",
      views: {
        'menuContent' :{
          templateUrl: "templates/event.html",
          controller: 'EventCtrl'
        }
      }
    })

    .state('app.eventHome', {
      url: "/events/:eventId/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/event-home.html",
          controller: 'homeCtrl'
        }
      }
    })

    .state('app.eventAgenda', {
      url: "/events/:eventId/agenda",
      views: {
        'menuContent' :{
          templateUrl: "templates/event-agenda.html",
          controller: 'agendaCtrl'
        }
      }
    })

     .state('app.eventSpeakers', {
      url: "/events/:eventId/speakers",
      views: {
        'menuContent' :{
          templateUrl: "templates/event-speakers.html",
          controller: 'speakersCtrl'
        }
      }
    })


    .state('app.eventRegister', {
      url: "/events/:eventId/register",
      views: {
        'menuContent' :{
          templateUrl: "templates/event-register.html",
          controller: 'registerCtrl'
        }
      }
    })

    .state('app.eventVenue', {
      url: "/events/:eventId/venue",
      views: {
        'menuContent' :{
          templateUrl: "templates/event-venue.html",
          controller: 'venueCtrl'
        }
      }
    })

    .state('app.eventSponsors', {
      url: "/events/:eventId/sponsors",
      views: {
        'menuContent' :{
          templateUrl: "templates/event-sponsors.html",
          controller: 'sponsorsCtrl'
        }
      }
    })

    .state('app.gallery', {
      url: "/gallery",
      views: {
        'menuContent' :{
           templateUrl: "templates/gallery.html",
           controller: "GalleryCtrl"
        }
      }
    })

    .state('app.album', {
      url: "/gallery/album",
      //url: "/gallery/:galleryId",
      views: {
        'menuContent' :{
           templateUrl: "templates/album.html",
           controller: "AlbumCtrl"
        }
      }
    })

    .state('app.contacts', {
      url: "/contacts",
      views: {
        'menuContent' :{
          templateUrl: "templates/contacts.html",
          controller: "ContactsCtrl"
        }
      }
      })

    .state('app.contact-detail', {
      url: "/contact/:contactId",
      views: {
        'menuContent' :{
          templateUrl: "templates/contact-detail.html",
            controller: "ContactDetailCtrl"
        }
      }
    });


  $urlRouterProvider.otherwise('/app/feed');
});

