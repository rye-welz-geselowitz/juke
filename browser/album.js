juke.controller('AlbumCtrl', function ($scope,$http,$rootScope) {
	 $rootScope.$on('changedSongState',function(event,data){
	 	$rootScope.$broadcast('changedStateEmitted',data);
	 });
	 $rootScope.$on('updatingProgress',function(event,data){
	 	$rootScope.$broadcast('gottaDigest',data);
	 });

	 $scope.$on('changedStateEmitted',function(event,data){
	 	var keys=Object.keys(data);
	 	keys.forEach(function(key){
	 		$scope[key]=data[key];
	 	});
	 });

	//immediately execute
	var promiseForBody=$http.get('/api/albums/2')
	promiseForBody
	.then(function (body) {
	var albumFromServer = body.data;
		albumFromServer.imageUrl = '/api/albums/' + albumFromServer.id + '/image';
		$scope.album = albumFromServer;
	 	$scope.idToNext = {};
	 	var songs = $scope.album.songs;
	 	for (var i = 0; i < songs.length; i++){
	 		$scope.idToNext[songs[i].id] = songs[(i+1)%(songs.length)].id;
	 	}
	 	$scope.idToAudio = {};
		$scope.idToPrevious = {};
		$scope.idToPrevious[songs[0].id]=songs[songs.length-1].id;
	 	for (var i = 1; i < songs.length; i++){
	 		$scope.idToPrevious[songs[i].id] = songs[(i-1)].id;
	 	} 
	 	var toExport={idToAudio:$scope.idToAudio,idToPrevious:$scope.idToPrevious,idToNext:$scope.idToNext};
	 	$scope.$emit('changedSongState',toExport);
	 }).catch(console.error.bind(console));
	 $scope.anySongPlaying = false;
	 $scope.noSongsPlayedYet = true;

  	//methods
	$scope.start=startHelper.bind($scope);
	$scope.stop = stopHelper.bind($scope)


});
