angular.module("delta").service("alertService",alertService);

alertService.$inject = ["toastr"];

function alertService(toastr){
    this.showSuccess = showSuccess;
    this.showError = showError;
    this.showWarning = showWarning;
    this.showInfo = showInfo;
    var progress = {progressBar : true};

    function showSuccess(mensagem,titulo){
        if(!titulo){
            titulo = "ok:";
        }
        toastr.success(mensagem, titulo, progress);
    }

    function showError(mensagem,titulo){
        if(!titulo){
            titulo = "Erro:";
        }
        toastr.error(mensagem, titulo,progress);
    }

    function showWarning(mensagem,titulo){
        if(!titulo){
            titulo = "Alerta:";
        }
        toastr.warning(mensagem, titulo,progress);
    }

    function showInfo(mensagem,titulo){
        if(!titulo){
            titulo = "Informação:";
        }
        toastr.info(mensagem, titulo);
    }

}