var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000 );

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x213055 );
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild( renderer.domElement );

camera.position.z = 500;

// //-- Top Light
// var directionalLight = new THREE.DirectionalLight( 0x3b6adf, 0.5 );
// directionalLight.position.set( 0, 10, 0 );
// scene.add( directionalLight );
// //-- Bottom Light
// var directionalLight2 = new THREE.DirectionalLight( 0x00ffd2, 0.5 );
// directionalLight2.position.set( 0, -10, 0 );
// scene.add( directionalLight2 );

var torusGeometry = new THREE.TorusGeometry( 100, 20, 32, 64 );
material = new THREE.MeshNormalMaterial();
var torus1 = new THREE.Mesh( torusGeometry, material );
scene.add( torus1 );

var cubeGeometry = new THREE.IcosahedronGeometry( 100, 0);
var cube1 = new THREE.Mesh( cubeGeometry, material );
scene.add( cube1 );

cube1.position.y= 200;


// instantiate a loader
var loader = new THREE.OBJLoader();

// load a resource
loader.load(
	// resource URL
	'js/icosa.obj',
	// Function when resource is loaded
	function ( icosa ) {
    material2 = new THREE.MeshNormalMaterial();
    var icosaMesh = new THREE.Mesh( icosa, material2 );
		scene.add( icosa );
	}
);



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

  torus1.rotation.x += 0.01;
  torus1.rotation.y += 0.01;
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();
