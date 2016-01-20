angular.module('delta').controller('CadastroPessoaController',CadastroPessoaController);

function CadastroPessoaController($scope,$stateParams,alertService){
    $scope.nome = 'Pessoa Controller';

    var meuId = $stateParams.id;

    if(meuId === '10'){
        alertService.showSuccess('Parametro recebido com sucesso');
    }

}