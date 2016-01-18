angular.module("delta").controller("IndexController", IndexController);

IndexController.$inject = ["$scope"];

function IndexController($scope){
    $scope.app = "Meu App";
    $scope.nome = "Wendel Guedes";
    $scope.testeFuncao = testeFuncao;
    $scope.myStyle = {};

    $scope.$watch("nome", onchangeNome);

    function onchangeNome(novoValor, valorAntigo){
        if(novoValor === valorAntigo){
            return;
        }

        if(novoValor === "delta"){
            $scope.myStyle.backgroundColor = "red";
        }else{
            $scope.myStyle.backgroundColor = "blue";
        }

    }

    function testeFuncao(){
        alert("Olá " + $scope.nome);
    }
}
