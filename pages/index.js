import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRive, useStateMachineInput } from 'rive-react'
// import HowlAnimation from 'howl-animation'

export default function Home() {

  const STATE_MACHINE_NAME = "State Machine";

  const { rive, RiveComponent } = useRive({
    src: "howl-animation.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true
  });

  const onClickInput = useStateMachineInput(rive, STATE_MACHINE_NAME, "Light Switch");
  const onMouseOverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, "Bouncing");

  return (
    <div>
      <RiveComponent
        onClick={() => onClickInput.fire()}
        onMouseOver={() => onMouseOverInput.value = true}
        onMouseOut={() => onMouseOverInput.value = false}
      />
    </div>
  )
}