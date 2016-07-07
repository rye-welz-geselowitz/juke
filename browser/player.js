juke.controller('PlayerCtrl', function ($scope,$http,$rootScope) {
	 $rootScope.$on('changedSongState',function(event,data){
	 	$rootScope.$broadcast('changedStateEmitted',data);
	 })
	 $rootScope.$on('updatingProgress',function(event,data){
	 	$rootScope.$broadcast('gottaDigest',data);
	 })
	 $scope.$on('changedStateEmitted',function(event,data){
	 	var keys=Object.keys(data);
	 	keys.forEach(function(key){
	 		$scope[key]=data[key];
	 	});
	 });
	 $scope.$on('gottaDigest',function(event,data){
	 	console.log('wanna digest',data)
	 	$scope.progress=data.progress;
	 	$scope.$digest();
	 })

	 $scope.next = function(id){
  	 	$scope.start($scope.idToNext[id]);
  	 }
  	 $scope.previous = function(id){
  	 	$scope.start($scope.idToPrevious[id]);
  	 }
  	$scope.start=startHelper.bind($scope);
  	$scope.stop = stopHelper.bind($scope)
  	$scope.anySongPlaying = false;
  	$scope.noSongsPlayedYet = true;
});
