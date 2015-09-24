angular.module('kwDirective.menu', [])

.directive('kwMenu', function () {
	return {
		templateUrl: 'kw-directive/menu/templates/menu.html',
		restrict: 'AE',
		replace: true,
		transclude: true
	};
})

.directive('kwBrand', function () {
	return {
		templateUrl: 'kw-directive/menu/templates/brand.html',
		restrict: 'AE',
		replace: true,
		scope: {
			image: '=',
			link: '='
		}
	};
})

.directive('kwMenuBar', function () {
	return {
		templateUrl: 'kw-directive/menu/templates/menu-bar.html',
		restrict: 'AE',
		replace: true
	};
});