juke.controller('PlayerCtrl', function ($scope,$http,$rootScope) {
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
  	 	$scope.start($scope.idToNext[id],true);
  	 }
  	 $scope.previous = function(id){
  	 	$scope.start($scope.idToPrevious[id],true);
  	 }
  	$scope.start=startHelper.bind($scope);
  	$scope.stop = stopHelper.bind($scope)
  	$scope.anySongPlaying = false;
  	$scope.noSongsPlayedYet = true;
});
