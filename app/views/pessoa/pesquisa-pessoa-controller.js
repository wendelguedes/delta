angular.module("delta").controller("PesquisaPessoaController", CadastroPessoaController);

function CadastroPessoaController($scope){
    $scope.nome = "Valor informado no controller";
}
