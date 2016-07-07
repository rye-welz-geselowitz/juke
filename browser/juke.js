var juke = angular.module('juke', []);

// juke.controller('MainCtrl', function ($scope,$http) {
	// var promiseForBody=$http.get('/api/albums/2')
	// promiseForBody
 //  	.then(function (body) {
 //    	var albumFromServer = body.data;
 //  		albumFromServer.imageUrl = '/api/albums/' + albumFromServer.id + '/image';
 //  		$scope.album = albumFromServer;
 //  	 	$scope.idToNext = {};
 //  	 	var songs = $scope.album.songs;
 //  	 	for (var i = 0; i < songs.length; i++){
 //  	 		$scope.idToNext[songs[i].id] = songs[(i+1)%(songs.length)].id;
 //  	 	}
 // 		$scope.idToPrevious = {};
 // 		$scope.idToPrevious[songs[0].id]=songs[songs.length-1].id;
 //  	 	for (var i = 1; i < songs.length; i++){
 //   	 		$scope.idToPrevious[songs[i].id] = songs[(i-1)].id;
 //  	 	} 
 // 	 }).catch(console.error.bind(console));

  	 // $scope.idToAudio = {};

  	 // $scope.start = function(id){
  	 // 	if ($scope.currentSongId){
  	 // 		$scope.stop($scope.currentSongId);
  	 // 	}
  	 // 	$scope.previousSongId=null;
  		// var audio = document.createElement('audio');
  		// audio.addEventListener('ended', function () {
    // 			$scope.next($scope.currentSongId); // have not tested
  		// });
  		// audio.addEventListener('timeupdate', function () {
    // 			$scope.progress = 100 * audio.currentTime / audio.duration;
    // 			$scope.$digest();
  		// });
  		// $scope.idToAudio[id] = audio;
  		// audio.src = '/api/songs/' + id + '/audio';
  		// audio.load();
  		// audio.play(); 	
  		// $scope.currentSongId = id;
  		// $scope.anySongPlaying = true;	
  		// $scope.noSongsPlayedYet = false;
  	 // }

  	 // $scope.stop = function(id){
  	 // 	var audio = $scope.idToAudio[id];
  	 // 	audio.pause();
  	 // 	$scope.anySongPlaying = false;
  	 // 	$scope.previousSongId = $scope.currentSongId;
  	 // 	$scope.currentSongId = null;
  	 // }
  	 // $scope.next = function(id){
  	 // 	$scope.start($scope.idToNext[id]);
  	 // }
  	 // $scope.previous = function(id){
  	 // 	$scope.start($scope.idToPrevious[id]);
  	 // }

  	 // $scope.anySongPlaying = false;
  	 // $scope.noSongsPlayedYet = true;
     // });




