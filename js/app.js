var app = angular.module('CaixaEletronico', []);
app.controller('SaqueController', function($scope) {
  $scope.sacar = function() {
	$scope.notas_disponiveis = [
		{ valor: 100, quantidade: 0 },
		{ valor: 50,  quantidade: 0 },
		{ valor: 20,  quantidade: 0 },
		{ valor: 10,  quantidade: 0 }
	];
  	
  	$scope.error = false;

  	$scope.valor_restante = $scope.valor_saque || 0;

  	var resto = $scope.valor_saque - (Math.floor($scope.valor_saque / 10) * 10);

  	if ($scope.valor_restante < 10 || resto !== 0) {
  		$scope.error = true;
  		return;
  	}

  	$scope.notas_disponiveis.forEach(function(nota, index){
  		while ($scope.valor_restante > 0 && $scope.valor_restante >= nota.valor) {
	  		$scope.valor_restante -= nota.valor;
	  		nota.quantidade++;
  		}
  	});
  }
});