"use client";
import styled from "@emotion/styled";
import styles from './page.module.css'
import ReactFlow, {Controls, Background, applyNodeChanges} from 'reactflow';
import 'reactflow/dist/style.css';
import {useState, useCallback, useEffect} from "react";
import SkillsNode from "@/app/player/Skills.node.js";
import AbilityNode from "@/app/player/AbilityNode.js";
import {SocketProvider} from "@/app/SocketContext.component";
import {DiceBoxProvider} from "@/app/DiceBoxContext.component";
import RollNode from "@/app/player/Roll.node.js";
import {usePlayerStore} from "@/store";
import {createPlayer} from "@/create-player";
import {classAbilities} from "@/app/ClassAbilities";
import BaseStatsNode from "@/app/player/BaseStatsNode";

const initialNodes = (player) => [{
    id: "str", data: {type: "str", player}, position: {x: 0, y: -200}, type: 'skills',
}, {
    id: "dex", data: {type: "dex", player}, position: {x: 175, y: -200}, type: 'skills',
}, {
    id: "con", data: {type: "con", player}, position: {x: 0, y: -90}, type: 'skills',
}, {
    id: "int", data: {type: "int", player}, position: {x: 175 * 2, y: -200}, type: 'skills',
}, {
    id: "wis", data: {type: "wis", player}, position: {x: 175 * 3, y: -200}, type: 'skills',
}, {
    id: "cha", data: {type: "cha", player}, position: {x: 175 * 4, y: -200}, type: 'skills',
}, {
    id: "dice", data: {}, position: {x: -220, y: 0}, type: 'roll',
    dragHandle: '#handle',
}, {
    id: "base-stats", type: 'base-stats', data: {
        player,
    }, position: {x: -220, y: -200},
}, ...(classAbilities(player)[player.playerClass] ?? [])];

const nodeTypes = {
    skills: SkillsNode, ability: AbilityNode, roll: RollNode, "base-stats": BaseStatsNode,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`
const Row = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
`

export default function Page() {
    const store = usePlayerStore((state) => state)

    const [sex, setSex] = useState("male");
    const [playerRace, setPlayerRace] = useState("dwarf");
    const [playerClass, setPlayerClass] = useState("alchemist");
    const [name, setName] = useState("John Doe");
    const [nodes, setNodes] = useState([]);

    const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [],);

    useEffect(() => {
        if (store.player === null) return;
        setNodes(initialNodes(store.player));
    }, [store.player]);

    return (<main className={styles.main}>
            <DiceBoxProvider>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <label htmlFor="classes">Choose a name:</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </Col>
                                <Col>
                                    <label htmlFor="races">Choose a race:</label>
                                    <select
                                        name="race"
                                        id="races"
                                        value={playerRace}
                                        onChange={(e) => setPlayerRace(e.target.value)}
                                    >
                                        <option value="dwarf">Dwarf</option>
                                        <option value="elf">Elf</option>
                                        <option value="gnome">Gnome</option>
                                        <option value="half-elf">Half Elf</option>
                                        <option value="human">Human</option>
                                        <option value="tiefling">Tiefling</option>
                                    </select>
                                </Col>
                                <Col>
                                    <label htmlFor="classes">Choose a class:</label>
                                    <select
                                        name="class"
                                        id="classes"
                                        value={playerClass}
                                        onChange={(e) => setPlayerClass(e.target.value)}
                                    >
                                        <option value="alchemist">Alchemist</option>
                                        <option value="barbarian">Barbarian</option>
                                        <option value="cleric">Cleric</option>
                                        <option value="druid">Druid</option>
                                        <option value="fighter">Fighter</option>
                                        {/*
                                            <option value="gunslinger">Gunslinger</option>
                                            <option value="warden">Warden</option>
                                            <option value="witch">Witch</option>
                                            */}
                                        <option value="warmage">Warmage</option>
                                        <option value="wizard">Wizard</option>
                                    </select>
                                </Col>
                                <Col style={{justifyContent: "flex-end"}}>
                                    <button onClick={() => {
                                        store.setPlayer(createPlayer(name, playerClass, playerRace))
                                        //router.push("/player/sheet")
                                    }}>
                                        Update
                                    </button>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <h2>{name}</h2>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{flexGrow: 1, borderTop: "2px solid black"}}>
                        <ReactFlow
                            nodes={nodes}
                            onNodesChange={onNodesChange}
                            edges={[]}
                            fitView
                            nodeTypes={nodeTypes}
                        >
                            <Background/>
                            <Controls/>
                        </ReactFlow>
                    </Row>
                </Container>
            </DiceBoxProvider>
        </main>)
}
