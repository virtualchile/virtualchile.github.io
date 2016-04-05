function onWindowResize(){camera.aspect=window.innerWidth/rendererHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,rendererHeight)}function onDocumentMouseMove(e){mouseX=e.clientX-windowHalfX,mouseY=e.clientY-windowHalfY}var scene=new THREE.Scene,rendererHeight=700,camera=new THREE.PerspectiveCamera(75,window.innerWidth/rendererHeight,.1,1e4),renderer=new THREE.WebGLRenderer({antialias:!0}),mouseX=0,mouseY=0;document.addEventListener("mousemove",onDocumentMouseMove,!1),window.addEventListener("resize",onWindowResize,!1);var windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2;window.innerWidth<=770?(renderer.setSize(window.innerWidth,500),camera.aspect=window.innerWidth/500):(renderer.setSize(window.innerWidth,rendererHeight),camera.aspect=window.innerWidth/rendererHeight),renderer.setClearColor(2175061),renderer.setPixelRatio(window.devicePixelRatio),canvas_intro=document.getElementById("canvas-intro"),canvas_intro.appendChild(renderer.domElement),camera.position.z=500;var torusGeometry=new THREE.TorusGeometry(300,100,32,64),material=new THREE.MeshNormalMaterial,torus1=new THREE.Mesh(torusGeometry,material);scene.add(torus1),torus1.position.x=600,torus1.position.z=-100;var geometry=new THREE.CylinderGeometry(50,50,200,32),cylinder=new THREE.Mesh(geometry,material);scene.add(cylinder),cylinder.position.x=-400,cylinder.position.y=-400,cylinder.position.z=-100,cylinder.rotation.y=-100;var cubeGeometry=new THREE.BoxGeometry(100,100,100),cube1=new THREE.Mesh(cubeGeometry,material);scene.add(cube1),cube1.position.set(-600,0,-400);var icosaObj,octahedronObj,fluidObj,manager=new THREE.LoadingManager;manager.onProgress=function(e,n,o){console.log(e,n,o)};var loader=new THREE.OBJLoader(manager);loader.load("js/object_icosahedron.obj",function(e){e.traverse(function(e){e instanceof THREE.Mesh&&(e.material=material)}),icosaObj=e,scene.add(e),e.position.y=200});var loader2=new THREE.OBJLoader(manager);loader2.load("js/object_octahedron.obj",function(e){e.traverse(function(e){e instanceof THREE.Mesh&&(e.material=material)}),octahedronObj=e,scene.add(e),e.position.set(-400,400,-1500)});var loader3=new THREE.OBJLoader(manager);loader2.load("js/object_fluid.obj",function(e){e.traverse(function(e){e instanceof THREE.Mesh&&(e.material=material)}),fluidObj=e,scene.add(e),e.position.set(-700,400,0),e.scale.set(1.2,1.2,1.2)});var render=function(){camera.lookAt(scene.position),camera.position.x+=.05*(mouseX-camera.position.x),camera.position.y+=.05*(-mouseY-camera.position.y),requestAnimationFrame(render),cube1.rotation.x+=.01,cube1.rotation.y-=.01,torus1.rotation.x+=.01,torus1.rotation.y-=.01,icosaObj.rotation.x+=.01,icosaObj.rotation.y+=.01,octahedronObj.rotation.x+=.01,octahedronObj.rotation.y+=.01,fluidObj.rotation.x+=.01,fluidObj.rotation.y+=.01,cylinder.rotation.x+=.01,cylinder.rotation.y+=.01,renderer.render(scene,camera)};render();