//Global variables.
let scene, camera, renderer, cube;

/**
 * This function handles setting up the scene.
 */
function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  //Create a renderer.
  renderer = new THREE.WebGLRenderer({ antialias: true });

  //Set the size of the renderer.
  renderer.setSize(window.innerWidth, window.innerHeight);

  //Append the render dom element to the dom.
  document.body.appendChild(renderer.domElement);

  //Create a new box geometry.
  const geometry = new THREE.BoxGeometry(2, 2, 2);

  //Load the texture.
  const texture = new THREE.TextureLoader().load('crate.gif');

  //Set the material to the texture.
  const material = new THREE.MeshBasicMaterial({ map: texture });

  //Create the cube using the mesh function passing in the box geometry and the material.
  cube = new THREE.Mesh(geometry, material);

  //Add the cube to the scene.
  scene.add(cube);

  //Set the camera position to 5.
  camera.position.z = 5;
}

/**
 * This function handles animating the cube.
 */
function animate() {
  //Create a loop by requesting another animation frame.
  requestAnimationFrame(animate);

  //Set the x rotation to 0.01;
  cube.rotation.x += 0.01;

  //Set the y rotation to 0.01;
  cube.rotation.y += 0.01;

  //Use the renderer to re-render the scene.
  renderer.render(scene, camera);
}

/**
 * This function handles keeping the scene centered and filling the window.
 */
function onWindowResize() {
  //Update the aspect ration.
  camera.aspect = window.innerWidth / window.innerHeight;

  //Call update projection matrix.
  camera.updateProjectionMatrix();

  //Set the size of the renderer.
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//Attach a resize event listener to the window.
window.addEventListener('resize', onWindowResize, false);

//Call init.
init();

//Call animate.
animate();
