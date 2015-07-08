angular.module('starter.services', ['ngResource'])
.factory('Movie', function ($resource) {
	var localhost = window.location.hostname;
    return $resource('http://'+ localhost + ':5000/movies/:movieId');
});