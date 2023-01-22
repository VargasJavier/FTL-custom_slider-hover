import React from 'react'
import style from './main.css'

const Slider = () => {
  return (
    <section className={style.container}>
      <section className={style.content}>
        <div className={style.box}>
          <img src="assets/foto1.png"/>
          <span>Hombres</span>
        </div>
        <div className={style.box}>
          <img src="assets/foto2.png"/>
          <span>Mujeres</span>
        </div>
        <div className={style.box}>
          <img src="assets/foto3.png"/>
          <span>Niños</span>
        </div>
        <div className={style.box}>
          <img src="assets/foto4.png"/>
          <span>Infantes</span>
        </div>
        <div className={style.box}>
          <img src="assets/foto1.png"/>
          <span>Crid</span>
        </div>
      </section>
    </section>
  )
}

export default Slider
