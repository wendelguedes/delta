angular.module("delta").controller("IndexController", IndexController);

IndexController.$inject = ["$scope"];

function IndexController($scope){
    $scope.app = "Meu App";
    $scope.nome = "Wendel Guedes";
    $scope.listaPessoas = [];
    $scope.pessoa = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    function salvar(){
        $scope.listaPessoas.push($scope.pessoa);
        limpar();
    }

    function limpar(){
        $scope.pessoa = {};
    }

    function excluir(){
        console.log($scope.listaPessoas);
    }

}
