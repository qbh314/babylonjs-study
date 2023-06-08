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
  10, // 相机的半径
  BABYLON.Vector3.Zero(), // 相机的目标点
  scene // 相机的场景
)

// 把相机附加到画布上
camera.attachControl(canvas, true)

// 创建球
const sphere = BABYLON.MeshBuilder.CreateSphere(
  'sphere', // 球的名称
  { diameter: 2 }, // 球的直径
  scene, // 球所在的场景
)

// 创建光源
const light = new BABYLON.DirectionalLight(
  'light', // 光源名称
  new BABYLON.Vector3(0, -1, 0), // 光源的方向
  scene, // 光源所在的场景
)

// 渲染场景
engine.runRenderLoop(() => {
  scene.render()
})

// 监听窗口变化
window.addEventListener('resize', () => {
  engine.resize()
})

