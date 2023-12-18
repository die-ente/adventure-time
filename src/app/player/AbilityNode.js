import styled from '@emotion/styled'
import {useContext, useState} from "react";
import {SocketContext} from "@/app/SocketContext.component";

const Description = styled.div`
  font-style: italic;
  font-size: 8px;
  line-height: 11px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`
const Main = styled.div`
  width: 150px;
  border: 1px solid #000;
  padding: 5px;
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 2px;
  box-sizing: border-box;

  a {
    text-decoration: underline;
  }
`
const Row = styled.div`
  display: flex;
  gap: 6px;
  font-size: 10px;
  align-items: center;

  button {
    font-size: 7px;
    cursor: pointer;
  }
`
const Head = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.div`
  font-size: 12px;
  font-weight: bold;
`
const Type = styled.div`
  font-size: 6px;
  font-style: italic;
  font-variant: small-caps;
`

function AbilityNode({data: {player, description, name, type, limit, spellMin}}) {
    const socket = useContext(SocketContext);
    const [count, setCount] = useState(limit ?? -1);

    return (
        <Main>
            <Head>
                <Type>
                    {type}
                </Type>
                <Name>
                    {name}
                </Name>
            </Head>
            {limit > 0 && (
                <Row>
                    <div style={{fontSize: "8px"}}>
                        Uses: {count} / {limit}
                    </div>
                    <button onClick={() => setCount(v => Math.max(0, v - 1))} disabled={count === 0}>
                        Use
                    </button>
                    <button onClick={() => setCount(limit)}>
                        Reset
                    </button>
                </Row>
            )}
            <Description>
                {typeof description === "string" ? description : description(player)}
            </Description>
        </Main>
    );
}

export default AbilityNode;