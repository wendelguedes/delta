angular.module("delta").controller("IndexController", IndexController);

IndexController.$inject = ["$scope","$timeout","alertService","ParametrosAplicacao","$filter","$rootScope","$state"];

function IndexController($scope,$timeout,alertService,ParametrosAplicacao,$filter, $rootScope, $state){
    $scope.app = "Meu App";
    $scope.listaPessoas = [];
    $scope.pessoa = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.onclickEditar = onclickEditar;
    $scope.getRowStyle = getRowStyle;

    iniciar();

    function iniciar(){
        $scope.gridPessoas = {
            data: "listaPessoas",
            columnDefs:[
                {field:"nome", display:"Nome", width:200},
                {field:"sobrenome", display:"Sobrenome"},
                {field:"dataNascimento", display:"Data Nascimento", width:150, cellTemplate: "app/template/cell-template.html"},
                {field:"editar", display:"", width:60, cellTemplate: "app/template/editar-template.html"}
            ],
            rowTemplate:"app/template/row-template.html"
        }
    }

    function salvar(){
        setarToucheNosInputs();

        var data = $scope.pessoa.dataNascimento;
        $scope.ultimdaDataCadastrada =  $filter("date")(data,'dd/MM/yyyy');

        if($scope.formPessoa.$invalid){
            alertService.showError("Verifique o erro", "Erro");
            return;
        }
        alertService.showSuccess("Certinho chapa", "Ok");
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

    function onclickEditar(pessoaSelecionada){
        $scope.pessoa = pessoaSelecionada;
    }

    function getRowStyle(pessoaSelecionada){
        var style = {};
        style.backgroundColor = pessoaSelecionada.cor;
        return style;
    }

    $scope.dispararEvento = function(){
        $rootScope.$broadcast("testeBroadcastEvent",{nome: "Wendel Guedes"})
        $state.go("jdskfhksdhfk");
    };

    $rootScope.$on("$stateChangeStart", stateChangeStart);
    $rootScope.$on("$stateChangeSuccess", stateChangeSuccess);
    $rootScope.$on("$stateNotFound", stateNotFound);

    function stateChangeStart(event, toState, toParams, fromState, fromParams){
        if(toState.name === "cadastro-pessoa"){
            alertService.showError("Você não tem permissão de acesso a tela " + toState.name);
            event.preventDefault();
        }
    }

    function stateChangeSuccess(event, toState, toParams, fromState, fromParams){
        alertService.showSuccess("Carregou estado " + toState.name + " com sucesso!");
    }

    function stateNotFound(event, unfoundState, fromState, fromParams){
        alertService.showError("Essa pagina não existe");
        $state.go("home");
    }

}
