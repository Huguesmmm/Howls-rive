import { Alignment, Fit, Layout, useRive, useStateMachineInput } from 'rive-react'

export const HowlFace = () => {
    const STATE_MACHINE_NAME = "State Machine";

    const { rive, RiveComponent } = useRive({
        src: "howl-animation.riv",
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true
    });

    const onClickInput = useStateMachineInput(rive, STATE_MACHINE_NAME, "Light Switch");
    const onMouseOverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, "Bouncing");

    return (
            <RiveComponent
                className="howl-face"
                onClick={() => onClickInput.fire()}
                onMouseOver={() => onMouseOverInput.value = true}
                onMouseOut={() => onMouseOverInput.value = false}
            />
    )
}