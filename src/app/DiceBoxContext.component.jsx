import {createContext, useContext, useEffect, useRef, useState} from "react";
import DiceBox from "@3d-dice/dice-box";
import styled from "@emotion/styled";

const DiceBoxContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
  
  canvas {
    width: 100%;
    height: 100%;
  }
`;

const prepareDiceBox = () => {
    return new DiceBox("#dice-box", {
        assetPath: "assets/",
        origin: "https://unpkg.com/@3d-dice/dice-box@1.0.8/dist/",
        theme: "default",
        themeColor: "#5e44ff",
        offscreen: true,
        scale: 4,
    });
}

export const useDiceBox = () => useContext(DiceBoxContext);

export const DiceBoxContext = createContext(null);

export const DiceBoxProvider = ({children}) => {
    const diceBox = useRef(null);
    const [ready, setReady] = useState(false);
    const containerRef = useRef(null);

    const show = () => {
        containerRef.current.style.display = "block";
    }
    const hide = () => {
        containerRef.current.style.display = "none";
    }

    useEffect(() => {
        if (diceBox.current) return
        if (!containerRef.current) return

        diceBox.current = prepareDiceBox();
        diceBox.current.init().then(() => {
            setReady(true);
            hide()
        })
    }, [containerRef.current])

    return <DiceBoxContext.Provider value={{
        roll: (def = "2d20") => {
            show()
            return diceBox.current.roll(def).then(v => {
                return diceBox.current.getRollResults()
            })
        },
        show,
        hide
    }}>
        {ready ? children : <>Fetching your dice...</>}
        <DiceBoxContainer ref={containerRef} id="dice-box" />
    </DiceBoxContext.Provider>;
};