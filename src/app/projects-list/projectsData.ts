export interface Project {
  title: string
  link: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'Prototype: Impossible Spaces in VR',
    link: 'https://github.com/DanielBallem/Impossible-Spaces-In-VR',
    image: 'ImpossibleSpaces.png',
  },
  {
    title: 'Prototype: Planetary Gravity using Mesh Mormals',
    link: 'https://github.com/DanielBallem/PlanetGravityUnity',
    image: 'PlanetProject.png',
  },
  {
    title: 'Theoretical: Scalable Quest System Architecture',
    link: 'https://github.com/DanielBallem/Quest-System',
    image: 'questArchitecture.png',
  },
  {
      title: "Released Mobile App: Bullet Hell Gauntlet",
      link: "https://play.google.com/store/apps/details?id=com.DanielBallem.BulletHellGauntlet&hl=en&gl=US&pli=1",
      image: "mobileApp.png"
  },
  {
      title: "Small Exploration: Mandelbulb point cloud",
      link: "https://github.com/DanielBallem/small-explorations/tree/main/MandelbulbPointCloud",
      image: "Mandelbulb.png"
  },
  {
    title: "Small Prototype: Drawable ink shader",
    link: "https://github.com/DanielBallem/small-explorations/tree/main/MarioSunshineGoopShader",
    image: "alphagoop.png"
}
]
