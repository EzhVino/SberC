import React from 'react'
import { kitten } from '../../../assets'

import styles from './KittenImg.module.css'

const KittenImg = () => {
  return (
    <img
      src={kitten}
      alt="картинка не отображается :("
      className={styles.img}
    />
  )
}

export default KittenImg
