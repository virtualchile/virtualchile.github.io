var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000 );

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x213055 );
renderer.setPixelRatio( window.devicePixelRatio );
canvas_intro = document.getElementById('canvas-intro');
canvas_intro.appendChild( renderer.domElement );

camera.position.z = 500;

// //-- Top Light
// var directionalLight = new THREE.DirectionalLight( 0x3b6adf, 0.5 );
// directionalLight.position.set( 0, 10, 0 );
// scene.add( directionalLight );
// //-- Bottom Light
// var directionalLight2 = new THREE.DirectionalLight( 0x00ffd2, 0.5 );
// directionalLight2.position.set( 0, -10, 0 );
// scene.add( directionalLight2 );

var torusGeometry = new THREE.TorusGeometry( 300, 100, 32, 64 );
material = new THREE.MeshNormalMaterial();
var torus1 = new THREE.Mesh( torusGeometry, material );
scene.add( torus1 );
torus1.position.x= 600;
torus1.position.z= -100;

var geometry = new THREE.CylinderGeometry( 50, 50, 200, 32 );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

cylinder.position.x= -400;
cylinder.position.y= -400;
cylinder.position.z= -100;
cylinder.rotation.y= -100;


var cubeGeometry = new THREE.BoxGeometry( 100, 100, 100);
var cube1 = new THREE.Mesh( cubeGeometry, material );
scene.add( cube1 );

cube1.position.set(-600,0,-400);

var icosaObj;
var octahedronObj;
var fluidObj;

var manager = new THREE.LoadingManager();
				manager.onProgress = function ( item, loaded, total ) {

					console.log( item, loaded, total );

				};


// Model1
				var loader = new THREE.OBJLoader( manager );
				loader.load( 'js/object_icosahedron.obj', function ( icosa) {
					icosa.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
							child.material = material;
						}
					} );
          icosaObj = icosa;
					scene.add(icosa);
          icosa.position.y= 200;
				} );

// Model2
  				var loader2 = new THREE.OBJLoader( manager );
  				loader2.load( 'js/object_octahedron.obj', function (octahedron) {
  					octahedron.traverse( function ( child2 ) {
  						if ( child2 instanceof THREE.Mesh ) {
  							child2.material = material;
  						}
  					} );
            octahedronObj = octahedron;
  					scene.add(octahedron);
            octahedron.position.set(-400, 400, -1500);

  				} );

// Model2
  				var loader3 = new THREE.OBJLoader( manager );
  				loader2.load( 'js/object_fluid.obj', function (fluid) {
  					fluid.traverse( function ( child3 ) {
  						if ( child3 instanceof THREE.Mesh ) {
  							child3.material = material;
  						}
  					} );
            fluidObj = fluid;
  					scene.add(fluid);
            fluid.position.set(-700, 400, 0);
            fluid.scale.set(1.2, 1.2, 1.2);

  				} );




var mouseX = 0;
var mouseY = 0;
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'resize', onWindowResize, false );
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function onWindowResize() {
				SCREEN_WIDTH = window.innerWidth;
				SCREEN_HEIGHT = window.innerHeight;
				camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
				camera.updateProjectionMatrix();
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
			}

function onDocumentMouseMove( event ) {
				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY );
			}

var render = function () {
  camera.lookAt( scene.position);
  // camera.rotation.x += ( +mouseY) * 0.000005;
  // camera.rotation.y += ( +mouseX) * 0.000005;

  // camera.position.x += ( -mouseX) * 0.0005;
  // camera.position.y += ( +mouseY) * 0.0005;

  camera.position.x += ( mouseX - camera.position.x ) * 0.05;
	camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

  // camera.position.x.maxDistance = 10;
  // camera.position.y.maxDistance = 10;
  // camera.up = new THREE.Vector3(0,0,1);


  requestAnimationFrame( render );

  cube1.rotation.x += 0.01;
  cube1.rotation.y -= 0.01;
  torus1.rotation.x += 0.01;
  torus1.rotation.y -= 0.01;
  icosaObj.rotation.x += 0.01;
  icosaObj.rotation.y += 0.01;
  octahedronObj.rotation.x += 0.01;
  octahedronObj.rotation.y += 0.01;
  fluidObj.rotation.x += 0.01;
  fluidObj.rotation.y += 0.01;
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();
