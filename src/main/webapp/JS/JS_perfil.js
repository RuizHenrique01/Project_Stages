var $file = document.getElementById('file');
var $btnFile = document.getElementById('btnfile');
var $img = document.getElementById("imagem");
var $imgUser = document.getElementById("user");    
var $btnEditarInformacao = document.getElementById("button-edit-informacoes");
var $btnSalvarInformacao = document.getElementById("button-save-informacoes");
var $textId = document.getElementById("textId");
var $textoGmail = document.getElementById("textGmail");
var $textoSkype = document.getElementById("textSkype");
var $textoBiografia = document.getElementById("textBiografia");
var $textoCelular = document.getElementById("textCelular");
var $textoHorario = document.getElementById("textHorario");
var $textoLocalizacao = document.getElementById("textLocalizacao");
var $textoAniversario = document.getElementById("textAniversario");
var $formFotoPerfil = document.getElementById("form-Foto-Perfil");
var $btnEditNameUser = document.getElementById("btn-edit-name-user");
var $btnSaveNameUser = document.getElementById("btn-save-name-user");
var $textUpdateUsuario = document.getElementById("text-update-usuario");
var $btnCopy = document.getElementById("btn-copy");

$btnCopy.addEventListener("click", function(){
	$textId.select();
	document.execCommand("Copy");
});

$btnEditNameUser.addEventListener("click", function(){
    $btnEditNameUser.style.display = "none";
    $btnSaveNameUser.style.display = "block";
    $textUpdateUsuario.readOnly = false;
    $textUpdateUsuario.style.border = "1px solid rgb(59, 168, 248)";
});

$btnSaveNameUser.addEventListener("click", function(){
   
	$.ajax({
	       url: '/projectstages_mvc/atualizar/perfil-userName-meu-usuario',
	       data:{userName : $textUpdateUsuario.value},
	       success : function(result){
	    	  
	       }
	   });
	
	$btnEditNameUser.style.display = "block";
    $btnSaveNameUser.style.display = "none";
    $textUpdateUsuario.readOnly = true; 
    $textUpdateUsuario.style.border = "none";
});

$(document).ready(function(){
    $('#textCelular').mask('(00)00000-0000');
});

$btnEditarInformacao.addEventListener("click", function(){
    $btnEditarInformacao.style.display = "none";
    $btnSalvarInformacao.style.display = "block";
    $textoGmail.readOnly = false;
    $textoSkype.readOnly = false;
    $textoBiografia.readOnly = false;
    $textoCelular.readOnly = false;
    $textoHorario.readOnly = false;
    $textoLocalizacao.readOnly = false;
    $textoAniversario.readOnly = false;
});

/* $btnFile.addEventListener("click", function(){
	$formFotoPerfil.submit();  
	//$file.click();
});
   */
$file.addEventListener("change",function(){
	/*var file = this.files[0];
        
    if(file){
        const reader = new FileReader();
        reader.addEventListener("load",function(){
        $img.setAttribute("src", this.result);
        $imgUser.setAttribute("src",this.result);
        });  
        reader.readAsDataURL(file);
        $formFotoPerfil.submit(); 
    }*/
    
    $formFotoPerfil.submit();
   
});  

function modoNoturnoAtivadoPerfil(ativado){
	   if(ativado){	    
	   //Geral Padrão
	   var corpo = document.querySelector(".corpo").classList.toggle("bodyNigth"); 
	   var menu = document.querySelector(".menu").classList.toggle("menuNigth"); 
	   var botao = document.querySelector(".botao").classList.toggle("botaoNigth");
	   var principal = document.querySelector(".principal").classList.toggle("principalNigth"); 
	   var opcao = document.querySelector(".opcao").classList.toggle("opcaoNigth");
	   var statusNigth = document.querySelector(".status").classList.toggle("statusNigth");
	   var caixaAddProjetoInterno = document.querySelector(".caixa-add-projeto-interno").classList.toggle("caixa-add-projeto-internoNigth");
	   var fechaCaixaProjeto = document.querySelector(".fecha-caixa-projeto").classList.toggle("fecha-caixa-projetoNigth");
	   var textCaixaAddProjeto = document.querySelectorAll(".text-caixa-add-projeto");
	   
	   for (var i = 0; i < textCaixaAddProjeto.length; i++) {
		   textCaixaAddProjeto[i].classList.toggle("text-caixa-add-projetoNigth");
		 }
	   
	  //Add perfil
	   var gallery = document.querySelector(".gallery").classList.toggle("galleryNigth"); 
	   var informacao = document.querySelector(".informacao").classList.toggle("informacaoNigth"); 
	   var botoeseditnomeusuario = document.querySelector(".botoes-edit-nome-usuario").classList.toggle("botoes-edit-nome-usuarioNigth"); 
	   var updatenameuser = document.querySelector(".update-name-user").classList.toggle("update-name-userNigth"); 
	  }else{
		  
	   //Remove Geral Padrão
	   var corpo = document.querySelector(".corpo").classList.remove("bodyNigth");
	   var menu = document.querySelector(".menu").classList.remove("menuNigth"); 
	   var principal = document.querySelector(".principal").classList.remove("principalNigth"); 
	   var botao = document.querySelector(".botao").classList.remove("botaoNigth");
	   var opcao = document.querySelector(".opcao").classList.remove("opcaoNigth");
	   var statusNigth = document.querySelector(".status").classList.remove("statusNigth");
	   var caixaAddProjetoInterno = document.querySelector(".caixa-add-projeto-interno").classList.remove("caixa-add-projeto-internoNigth");
	   var fechaCaixaProjeto = document.querySelector(".fecha-caixa-projeto").classList.remove("fecha-caixa-projetoNigth");
	   var textCaixaAddProjeto = document.querySelectorAll(".text-caixa-add-projeto");
	   
	   for (var i = 0; i < textCaixaAddProjeto.length; i++) {
		   textCaixaAddProjeto[i].classList.remove("text-caixa-add-projetoNigth");
		 }
	   
	   //Remove perfil
	   var gallery = document.querySelector(".gallery").classList.remove("galleryNigth"); 
	   var informacao = document.querySelector(".informacao").classList.remove("informacaoNigth"); 
	   var botoeseditnomeusuario = document.querySelector(".botoes-edit-nome-usuario").classList.remove("botoes-edit-nome-usuarioNigth"); 
	   var updatenameuser = document.querySelector(".update-name-user").classList.remove("update-name-userNigth"); 
	  }
}    

(function(){
	'use strict'; 
	
	$.ajax({
       url: '/projectstages_mvc/retorna/modo-noturno/perfil',
       success : function(data){
       	modoNoturnoAtivadoPerfil(data);
       }
   });

	
})();
