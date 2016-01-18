angular.module("delta").controller("IndexController", IndexController);

IndexController.$inject = ["$scope","$timeout","toastr"];

function IndexController($scope,$timeout,toastr){
    $scope.app = "Meu App";
    $scope.nome = "Wendel Guedes";
    $scope.myClass = "";
    $scope.listaPessoas = [];
    $scope.pessoa = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    function salvar(){
        setarToucheNosInputs();
        if($scope.formPessoa.$invalid){
            toastr.error("Verifique", "Erro");
            return;
        }
        toastr.success("Certinho chapa", "Ok");
        $scope.listaPessoas.push($scope.pessoa);
        limpar();
    }

    function setarToucheNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setTouched();
            });
        });
    }

    function setarUnToucheNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setUntouched();
            });
        });
    }

    function limpar(){
        $scope.pessoa = {};
        $timeout(function(){
            setarUnToucheNosInputs();
            $scope.myClass = "blue";
        },80);
    }

    function excluir(){
        console.log($scope.listaPessoas);
    }

}
