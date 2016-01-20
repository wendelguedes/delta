angular.module('delta').controller('PesquisaPessoaController', PesquisaPessoaController);

function PesquisaPessoaController($scope, $state, alertService){
    $scope.nome = 'Pesquisa Controller';
    $scope.redirecionarParaCadastro = redirecionarParaCadastro;

    function redirecionarParaCadastro(){
        $state.go('cadastro-pessoa',{id:10});
    }

    $scope.$on("testeBroadcastEvent", function(event){
       var teste = event;
        alertService.showSuccess(teste);
    });


}