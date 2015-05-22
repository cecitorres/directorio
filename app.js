(function() {
  var app = angular.module('directorio', []);

  app.controller('DirectorioController', function(){
    this.contactos = contactos;
    this.visible = visible;

    this.desplegar = function() {
        this.visible = false;
    }

  });

  var visible = true;
  var contactos = [
    {
    	nombre: 	'Alhelí Ávila Ledezma',
    	ext:		'1453',
    	programa:	'PDT DIE',
    	email:		'alheli.avila@iiiepe.edu.mx',
    	cumple:		'1 Enero',
    	foto:		'alheli.jpg'
    },
    {
    	nombre: 	'Ana Gabriela Pérez Cantú',
    	ext:		'1456',
    	programa:	'PDT DIE',
    	email:		'gabriela.perez@iiiepe.edu.mx',
    	cumple:		'1 Enero',
    	foto:		'200x200_GabrielaPerez.png'
    },
    {
    	nombre: 	'Cristina Ramírez Gómez',
    	ext:		'3211',
    	programa:	'PROFORPE',
    	email:		'cristina.ramirez@iiiepe.edu.mx',
    	cumple:		'1 Enero',
    	foto: 		'200x200_CristinaRamirez.png'
    },
  ];
})();