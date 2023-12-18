import styled from '@emotion/styled'
import {useContext, useState} from "react";
import {SocketContext} from "@/app/SocketContext.component";

const Description = styled.div`
  font-style: italic;
  font-size: 8px;
  line-height: 11px;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`
const Main = styled.div`
  width: 170px;
  border: 1px solid #000;
  padding: 5px;
  border-radius: 5px;
  background: white;
`
const Row = styled.div`
  display: flex;
  gap: 6px;
  font-size: 10px;
  align-items: center;
  margin-bottom: 4px;

  button {
    font-size: 7px;
    cursor: pointer;
  }
`
const Slot = styled.div`
  width: 16px;
  height: 16px;
  background: #b9f8b2;
  border: 1px solid #000;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;

  &.used {
    background: #ddd;
  }
`

function BaseStatsNode({data: {player}}) {
    const socket = useContext(SocketContext);
    const [hp, setHp] = useState(player.maxHP);

    return (
        <Main>
            <b>{player.name}</b>
            <Description>
                <Row>
                    <b>AC:</b> {player.ac}
                </Row>
                <Row>
                    <b>HP:</b>
                    <input
                        style={{width: "25px", fontSize: "10px", textAlign: "center"}}
                        type={"text"}
                        value={hp}
                        onChange={(e) => setHp(e.target.value)}
                    />
                    / {player.maxHP}
                    <button onClick={() => setHp(player.maxHP)}>
                        Reset
                    </button>
                </Row>

                {["cleric", "druid", "wizard"].includes(player.playerClass) && (<>
                    <Row>
                    </Row>
                    <Row>
                        <b>1st level spell slots</b>
                    </Row>
                    <Row>
                        <Slot onClick={(e) => e.target.classList.toggle("used")}/>
                        <Slot onClick={(e) => e.target.classList.toggle("used")}/>
                        <Slot onClick={(e) => e.target.classList.toggle("used")}/>
                        <Slot onClick={(e) => e.target.classList.toggle("used")}/>
                    </Row>
                    <Row>
                        <b>2nd level spell slots</b>
                    </Row>
                    <Row>
                        <Slot onClick={(e) => e.target.classList.toggle("used")}/>
                        <Slot onClick={(e) => e.target.classList.toggle("used")}/>
                        <Slot onClick={(e) => e.target.classList.toggle("used")}/>
                    </Row>
                </>)}
            </Description>
        </Main>
    );
}

export default BaseStatsNode;