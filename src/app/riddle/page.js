"use client";
import styled from "@emotion/styled";
import {useState} from "react";


const Container = styled.div(({color}) => `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`)
const Field = styled.div(({color}) => `
    margin: 10px 40px;
    display: inline-block;
`)
const Row = styled.div(({letter}) => `
    display: flex;
    position: relative;
    
    &::before {
        content: "${letter}";
        position: absolute;
        right: 102%;
        top: 50%;
        transform: translateY(-50%);
    }
    
    &:nth-child(2) {
        border-top: 1px solid black;
    }
    
    &:not(:first-child) {
        border-left: 1px solid black;
        border-right: 1px solid black;
    
        &>div {
            border: 1px solid black;
        }
    }
    
    &:last-child {
        border-bottom: 1px solid black;
    }
`)
const Tile = styled.div(({color}) => `
    width: 40px;
    height: 40px;
    background-color: ${color};
    box-sizing: border-box;
    position: relative;
`)
const Number = styled.div(({color}) => `
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
`)

const colors = ["#ce6363", "#68aa68", "#505091", "#e1e19d"]
const letters = ["A", "B", "C", "D", "E"]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


const createField = () => {
    const field = new Array(5).fill(null).map((_, row) => new Array(10).fill(null));

    const getAdjacent = ([row, col]) => {
        while (true) {
            const next = getRandomIntInclusive(0, 4);
            //console.log("R", next)

            switch (next) {
                case 0:
                    if (row === 0) {
                        if (field[0][col + 1] === null)
                            return [0, col + 1]
                    } else {
                        if (field[row - 1][col] === null)
                            return [row - 1, col]
                    }
                /*
            case 1:
                if (row === 0) {
                    if (field[0][col + 1] === null)
                        return [0, col + 1]
                } else {
                    if (field[row - 1][col + 1] === null)
                        return [row - 1, col + 1]
                }
                 */
                case 2:
                    return [row, col + 1]
                /*
                case 3:
                    if (row === 4) {
                        if (field[4][col + 1] === null)
                            return [4, col + 1]
                    } else {
                        if (field[row + 1][col + 1] === null)
                            return [row + 1, col + 1]
                    }
                 */
                case 4:
                    if (row === 4) {
                        if (field[4][col + 1] === null)
                            return [4, col + 1]
                    } else {
                        if (field[row + 1][col] === null)
                            return [row + 1, col]
                    }
            }
        }
    }

    let type = getRandomIntInclusive(0, 3);

    const start = [getRandomIntInclusive(0, 4), 0];
    field[start[0]][start[1]] = type;
    console.log(type)
    type++;

    let next = getAdjacent(start);
    field[next[0]][next[1]] = type % 4;
    type++;

    while (next[1] < 9) {
        next = getAdjacent(next);
        field[next[0]][next[1]] = type % 4;
        type++;
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            if (field[i][j] === null)
                field[i][j] = getRandomIntInclusive(0, 3)
        }
    }

    return field;
}


export default function Page() {
    const [field, setField] = useState(null);

    return (<Container>
        {field &&
            <Field>
                <Row letter={""}>
                    {new Array(10).fill(0).map((_, col) =>
                        (<Tile color={"transparent"} key={`n-${col}`}>
                            <Number>
                                {col + 1}
                            </Number>
                        </Tile>)
                    )}
                </Row>
                {new Array(5).fill(0).map((_, row) =>
                    (<Row letter={letters[row]} key={`r-${row}`}>
                        {new Array(10).fill(0).map((_, col) =>
                            (<Tile color={colors[field[row][col]]} key={`t-${row}-${col}`}>
                            </Tile>)
                        )}
                    </Row>)
                )}
            </Field>
        }
        <br/>
        <br/>
        <br/>
        <div style={{textAlign: "center"}}>
            <b>You start at the left and have to reach the right</b>
            <br/>
            <br/>
            <button onClick={() => setField(() => createField())}>
                RESET
            </button>
        </div>
    </Container>);
}