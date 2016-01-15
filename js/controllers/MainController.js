app.controller('MainController', ['$scope', function($scope) {
	$scope.album = {
		title: "Smooth Jazz Sounds",
		cd_img: "images/cd.png",
		artist: "John Trumpet",
		release_date: new Date(2015, 05, 08),
		genre: "Jazz",
		number_tracks: 12,
		runtime: 56
	}

}]);