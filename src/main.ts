import './style.css'

// 导入babylonjs
import * as BABYLON from 'babylonjs'

// 创建canvas
const canvas = document.createElement('canvas')
// 设置canvas宽高
canvas.width = window.innerWidth
canvas.height = window.innerHeight
// 将canvas添加到body中
document.body.appendChild(canvas)

// 创建引擎 
const engine = new BABYLON.Engine(canvas, true)

// 创建场景
const scene = new BABYLON.Scene(engine)

// 创建相机
const camera = new BABYLON.ArcRotateCamera(
  'camera', // 相机名称
  0, // 相机的alpha值，水平旋转角度
  0, // 相机的alpha值，垂直旋转角度
  10, // 相机的直径
  BABYLON.Vector3.Zero(), // 相机的目标点
  scene // 相机的场景
)

// 设置相机的位置
camera.setPosition(new BABYLON.Vector3(0, 5, -10))

// 把相机附加到画布上
camera.attachControl(canvas, true)

// 创建球
const sphere = BABYLON.MeshBuilder.CreateSphere(
  'sphere', // 球的名称
  { diameter: 2 }, // 球的直径
  scene, // 球所在的场景
)

// // 创建平行光光源
// const light = new BABYLON.DirectionalLight(
//   'light', // 光源名称
//   new BABYLON.Vector3(-1, -1, 0), // 光源的方向
//   scene, // 光源所在的场景
// )
// // 设置平行光的颜色
// light.diffuse = new BABYLON.Color3(0, 1, 0)
// // 设置平行光的高光颜色
// light.specular = new BABYLON.Color3(1, 1, 1)
// // 设置平行光的强度
// light.intensity = 0.5

// // 创建点光源
// const pointLight = new BABYLON.PointLight(
//   'pointLight',
//   new BABYLON.Vector3(-2, 0, 0),
//   scene
// )
// // 设置点光源的颜色
// pointLight.diffuse = new BABYLON.Color3(1, 0, 0)
// // 设置点光源的高光颜色
// pointLight.specular = new BABYLON.Color3(1, 1, 0)
// // 设置点光源的强度
// pointLight.intensity = 0.5

// 创建聚光灯
const spotLight = new BABYLON.SpotLight(
  'spotLight', // 聚光灯的名称
  new BABYLON.Vector3(0, 5, 5), // 聚光灯的位置
  new BABYLON.Vector3(0, -1, -1), // 聚光灯的方向
  Math.PI / 3, // 聚光灯的角度
  2, // 聚光灯的强度
  scene // 聚光灯所在的场景
)
// 设置聚光灯的颜色
spotLight.diffuse = new BABYLON.Color3(1, 0, 1)
// 设置聚光灯的高光颜色
spotLight.specular = new BABYLON.Color3(1, 1, 0)
// 设置聚光灯的强度
spotLight.intensity = 1

// 生成阴影
// 球体生成阴影
const shadowGenerator = new BABYLON.ShadowGenerator(1024, spotLight)
// 球体投射阴影
shadowGenerator.addShadowCaster(sphere)





// 创建地面
const ground = BABYLON.MeshBuilder.CreateGround(
  'ground', // 地面名称
  { width: 20, height: 20 }, // 地面的宽高
  scene //  地面所在的场景
)
// ground.position.y = -1
ground.position.set(0, -1, 0)
// 地面接收阴影
ground.receiveShadows = true

// 创建平面
// const plane = BABYLON.MeshBuilder.CreatePlane(
//   'plane', // 平面名称
//   { size: 10 }, // 平面的宽高
//   scene, // 平面所在的场景
// )


// 创建立方体
// const box = BABYLON.MeshBuilder.CreateBox(
//   'box', // 立方体名称
//   { size: 2 }, // 立方体尺寸
//   scene // 立方体所在的场景
// )
// box.position.set(4, 0, 0)
// box.scaling.set(0.5, 0.5, 0.5)
// 旋转立方体45度
// box.rotation.set(0, Math.PI / 4, 0)
// 绕着某个点旋转
// box.rotateAround(
//   new BABYLON.Vector3(0, 0, 0), // 旋转的中心点
//   new BABYLON.Vector3(0, 1, 0), // 旋转的轴
//   Math.PI / 4 //旋转的角度
// )


// 创建圆柱体
// const cylinder = BABYLON.MeshBuilder.CreateCylinder(
//   'cylinder', // 圆柱体名称
//   { height: 2, diameter: 2 }, // 圆柱体的高和直径
//   scene // 圆柱体所在的场景
// )
// cylinder.position.set(0, 0, 4)
// cylinder.scaling.set(1, 0.5, 1)

// 创建圆锥体
// const cone = BABYLON.MeshBuilder.CreateCylinder(
//   'cone', // 圆锥体名称
//   {
//     height: 2, // 圆锥体的高
//     diameterTop: 0, // 圆锥体顶部的直径
//     diameterBottom: 2, // 圆锥体底部的直径
//     tessellation: 200 // 圆锥体的细分数
//   },
//   scene, // 圆锥所在的场景
// )

// 创建圆环
// const tours = BABYLON.MeshBuilder.CreateTorus(
//   'tours',
//   {
//     diameter: 3, // 圆环的直径
//     thickness: 1, // 圆环的厚度
//     tessellation: 100 // 圆环细分数
//   },
//   scene // 圆环的所在场景
// )
// tours.position.set(-4, -0.5, 0)
// tours.scaling.set(0.5, 0.5, 0.5)

// 渲染场景
engine.runRenderLoop(() => {
  scene.render()
})

// 监听窗口变化
window.addEventListener('resize', () => {
  engine.resize()
})

