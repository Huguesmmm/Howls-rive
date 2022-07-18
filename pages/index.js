import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import { useRive, useStateMachineInput } from 'rive-react'
import { Navbar } from '../components/navbar'
// import HowlAnimation from 'howl-animation'

export default function Home() {

  return (
    <div>
      <Navbar />
    </div>
  )
}