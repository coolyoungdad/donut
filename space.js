// Set up renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
  })
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor(0x000000, 1)
  
  const section = document.querySelector('section')
  
  section.appendChild(renderer.domElement)
  var clock = new THREE.Clock();

  
  // Set up scene
  const scene = new THREE.Scene()
  
  // Set up camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)
  camera.position.z = -50
  camera.lookAt(scene.position)
  
  // Set up lighting
//   const light = new THREE.DirectionalLight(0xffffff, 1)
//   scene.add(light)

    var sphere = new THREE.SphereBufferGeometry( 0.0001, 8, 8 );
    
    light1 = new THREE.PointLight( 0xff0040, 4, 40, 1 );
    light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
    scene.add( light1 );

    light2 = new THREE.PointLight( 0x0040ff, 4, 40, 1 );
    light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
    scene.add( light2 );

    light3 = new THREE.PointLight( 0x80ff80, 4, 40, 1 );
    light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
    scene.add( light3 );

    light4 = new THREE.PointLight( 0xffaa00, 4, 40, 1 );
    light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) ) );
    scene.add( light4 );
  
  
  // Hold data about Shapes
  const shapes = []
  
  
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Add animation loop
  const animate = function() {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)

    var time = Date.now() * 0.0005;
				light1.position.x = Math.sin( time * 0.7 ) * 15;
				light1.position.y = Math.cos( time * 0.5 ) * 30;
				light1.position.z = Math.cos( time * 0.3 ) * 15;
				light2.position.x = Math.cos( time * 0.3 ) * 30;
				light2.position.y = Math.sin( time * 0.5 ) * 15;
				light2.position.z = Math.sin( time * 0.7 ) * 30;
				light3.position.x = Math.sin( time * 0.7 ) * 15;
				light3.position.y = Math.cos( time * 0.3 ) * 30;
				light3.position.z = Math.sin( time * 0.5 ) * 15;
				light4.position.x = Math.sin( time * 0.3 ) * 30;
				light4.position.y = Math.cos( time * 0.7 ) * 15;
				light4.position.z = Math.sin( time * 0.5 ) * 30;
    
    
      shapes.forEach(shape => {
      shape.rotateX(0.02)
      shape.rotateY(0.02)
      shape.rotateZ(0.02)

    })
  }
  
  // Start animation
  animate()
  
  // Create a shape
  const createShape = function() {

    const geometry = new THREE.TorusGeometry(9, 5, 30, 30)
    const material = new THREE.MeshStandardMaterial({
      color: 0x777777,
      emissive: 0x0c0c0c,
    })
    const shape = new THREE.Mesh(geometry, material)

    shapes.push(shape)
    scene.add(shape)
  }
  
  createShape()
  

