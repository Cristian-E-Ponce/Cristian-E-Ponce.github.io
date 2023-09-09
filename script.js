/*
 APLICAÇÃO TESTE LISTVIEW IONIC FRAMEWORK 
 CRIADO POR CONCEICAO LOURENCO 
 DESENVOLVEDORA MOBILE
 PYTHON E JAVA
 ANO 2016
*/

// SIMULANDO UM WEBSERVICE OU BASE DE DADOS
 
angular.module('applistView', ['ionic'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: "/listagem",
        abstract: true
      })
    $urlRouterProvider.otherwise("app");
  })
  .controller('AppCtrl', function($scope) {
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true

    $scope.items =  [{
      id: 1,
      titulo: 'Bolo de Chocolate',
      detalhes: 'Serve a 20 pessoas',
      image: '#'
    }, {
      id: 2,
      logo: 'img/logo2.png',
      titulo: 'Bolo de Damasco',
      detalhes: 'Serve a 15 pessoas',
      image: '#'
    }, {
      id: 3,
      logo: 'img/logo3.png',
      titulo: 'Bolo Branco',
      detalhes: 'Serve a 25 pessoas',
      image: '#'
    }, {
      id: 4,
      logo: 'img/logo4.png',
      titulo: 'Bolo de limão',
      detalhes: 'Serve a 10 pessoas',
      image: '#'
    }, {
      id: 5,
      logo: 'img/logo4.png',
      titulo: 'Bolo de brigadeiro',
      detalhes: 'serve a 15 pessoas',
       image: '#'
    }];
    //IMPLEMENTANDO AS POSSIVEIS FUNÇÕES
    $scope.edit = function(item) {
       console.log("Editar item : " + item.titulo );
    }
    $scope.share = function(item) {
       console.log("Share item : " + item.titulo );
    }
    $scope.onItemDelete = function(item) {
       console.log("Delete item : " + item.titulo );
    }
  });