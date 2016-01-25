(function(){
    'use strict';

    angular.module('delta').config(config);

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider){
        var home = {
            url: '/home',
            templateUrl: 'app/views/home/home.html'
        };

        var menu = {
            url: '/menu',
            templateUrl: 'app/views/menu/menu.html'
        };

        var galeria = {
            url: '/galeria',
            templateUrl: 'app/views/galeria/galeria.html',
            resolve: {
                deps: function($ocLazyLoad){
                    return $ocLazyLoad.load('app/views/galeria/galeria.controller.js');
                }
            }
        };

        var cadastroPessoa = {
            url: '/cadastro-pessoa/:id',
            templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
            resolve: {
                deps: function($ocLazyLoad){
                    return $ocLazyLoad.load('app/views/pessoa/cadastro-pessoa.controller.js');
                }
            }
        };

        var pesquisaPessoa = {
            url: '/pesquisa-pessoa',
            templateUrl: 'app/views/pessoa/pesquisa-pessoa.html',
            resolve: {
                deps: function($ocLazyLoad){
                    return $ocLazyLoad.load('app/views/pessoa/pesquisa-pessoa.controller.js');
                }
            }
        };

        $stateProvider.state('home', home);
        $stateProvider.state('menu', menu);
        $stateProvider.state('galeria', galeria);

        $stateProvider.state('cadastroPessoa', cadastroPessoa);
        $stateProvider.state('pesquisaPessoa', pesquisaPessoa);

        $urlRouterProvider.otherwise('/home');
    }
})();