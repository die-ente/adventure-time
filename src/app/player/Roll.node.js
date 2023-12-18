import styled from "@emotion/styled";
import {useState} from "react";
import {useDiceBox} from "@/app/DiceBoxContext.component";
import {useSocket} from "@/app/SocketContext.component";

const Main = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  height: 305px;

  display: flex;
  flex-direction: column;
`
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Bonus = styled.div`
  font-size: 10px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`
const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
`
const Input = styled.input`
  width: 100%;
`
const History = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  font-size: 10px;
  flex-direction: column;
  gap: 3.5px;

  &>div {
    display: flex;
    justify-content: space-between;
    padding: 2px;
  }
  
  &>div:nth-child(odd) {
    background-color: #eee;
  }
`

function RollNode({}) {
    const diceBox = useDiceBox();

    const [toRoll, setToRoll] = useState("1d20");
    const [history, setHistory] = useState([]);

    return (
        <Main>
            <Head>
                <b>Roll</b>
                <dic id={"handle"}>
                    <svg width="20px" height="20px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5C8.67157 5 8 5.67157 8 6.5C8 7.32843 8.67157 8 9.5 8ZM9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14ZM11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5ZM15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8ZM17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6716 14.6716 11 15.5 11C16.3284 11 17 11.6716 17 12.5ZM15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z" fill="#121923"/>
                    </svg>
                </dic>
            </Head>
            <Form onSubmit={(e) => {
                e.preventDefault();
                const match = toRoll.toLowerCase().match(/^([0-9]{1,2}d[0-9]{1,3})(\+[0-9]+)?/)[0]

                if(!match) {
                    alert("Invalid roll")
                    return
                }

                diceBox.roll(match).then((result) => {
                    result.forEach((roll) => {
                        setHistory((h) => [roll, ...h])
                    })
                    setTimeout(() => {
                        diceBox.hide()
                    })
                })
            }}>
                <Row>
                    <div>
                        <Input type="text" placeholder="1d20" value={toRoll}
                               onChange={(e) => setToRoll(e.target.value.toLowerCase())}/>
                    </div>
                    <div>
                        <input type="submit" value="Roll"/>
                    </div>
                </Row>
                <Row>
                    <input type="button" onClick={() => {
                        diceBox.roll("1d20").then((result) => {
                            result.forEach((roll) => {
                                setHistory((h) => [roll, ...h])
                            })
                            setTimeout(() => {
                                diceBox.hide()
                            }, 500)
                        })
                    }} value="Roll 1D20"/>
                </Row>
            </Form>

            <History>
                {history.slice(0, 12).map((roll, i) => {
                    return <div key={i}>
                        {roll.qty}{roll.sides}: {roll.value} [{roll.rolls.map((r) => r.value).join(", ")}]
                        <div style={{cursor: "pointer"}} onClick={() => setHistory((h) => h.filter((_, j) => j !== i))}>
                            ×
                        </div>
                    </div>
                })}
            </History>
        </Main>
    );
}

export default RollNode;