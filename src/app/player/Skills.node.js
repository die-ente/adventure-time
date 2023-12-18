import styles from './stats-node.module.scss'
import styled from "@emotion/styled";
import {useContext} from "react";
import {DiceBoxContext} from "@/app/DiceBoxContext.component";

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Bonus = styled.div`
  font-size: 10px;
`

const StrSkills = ({player}) => {
    return (
        <div className={styles.tableColumn}>
            <Head>
                <b>Strength</b>
                <Bonus>
                    (Base: {player.stats.str >= 0 ? "+" : ""}{player.stats.str})
                </Bonus>
            </Head>
            <div className={styles.table}>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Saving Throw
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.str.save < 0 ? "" : "+"}{player.skills.str.save}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Athletics
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.str.athletics < 0 ? "" : "+"}{player.skills.str.athletics}
                    </div>
                </div>
            </div>
        </div>
    );
}

const DexSkills = ({player}) => {
    return (
        <div className={styles.tableColumn}>
            <Head>
                <b>Dexterity</b>
                <Bonus>
                    (Base: {player.stats.dex >= 0 ? "+" : ""}{player.stats.dex})
                </Bonus>
            </Head>
            <div className={styles.table}>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Saving Throw
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.dex.save < 0 ? "" : "+"}{player.skills.dex.save}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Acrobatics
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.dex.acrobatics < 0 ? "" : "+"}{player.skills.dex.acrobatics}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Sleight of Hand
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.dex.sleightOfHand < 0 ? "" : "+"}{player.skills.dex.sleightOfHand}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Stealth
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.dex.stealth < 0 ? "" : "+"}{player.skills.dex.stealth}
                    </div>
                </div>
            </div>
        </div>
    );
}

const ConSkills = ({player}) => {
    return (
        <div className={styles.tableColumn}>
            <Head>
                <b>Constitution</b>
                <Bonus>
                    (Base: {player.stats.con >= 0 ? "+" : ""}{player.stats.con})
                </Bonus>
            </Head>
            <div className={styles.table}>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Saving Throw
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.con.save < 0 ? "" : "+"}{player.skills.con.save}
                    </div>
                </div>
            </div>
        </div>
    );
}

const IntSkills = ({player}) => {
    const diceBox = useContext(DiceBoxContext)

    return (
        <div className={styles.tableColumn}>
            <Head>
                <b>Intelligence</b>
                <Bonus>
                    (Base: {player.stats.int >= 0 ? "+" : ""}{player.stats.int})
                </Bonus>
            </Head>
            <div className={styles.table}>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Saving Throw
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.int.save < 0 ? "" : "+"}{player.skills.int.save}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Arcana
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.int.arcana < 0 ? "" : "+"}{player.skills.int.arcana}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            History
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.int.history < 0 ? "" : "+"}{player.skills.int.history}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Investigation
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.int.investigation < 0 ? "" : "+"}{player.skills.int.investigation}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Nature
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.int.nature < 0 ? "" : "+"}{player.skills.int.nature}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Religion
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.int.religion < 0 ? "" : "+"}{player.skills.int.religion}
                    </div>
                </div>
            </div>
        </div>
    );
}

const WisSkills = ({player}) => {
    return (
        <div className={styles.tableColumn}>
            <Head>
                <b>Wisdom</b>
                <Bonus>
                    (Base: {player.stats.wis >= 0 ? "+" : ""}{player.stats.wis})
                </Bonus>
            </Head>
            <div className={styles.table}>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Saving Throw
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.wis.save < 0 ? "" : "+"}{player.skills.wis.save}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                        
                    >
                            Animal Handling
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.wis.animalHandling < 0 ? "" : "+"}{player.skills.wis.animalHandling}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                    >
                            Insight
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.wis.insight < 0 ? "" : "+"}{player.skills.wis.insight}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                    >
                            Medicine
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.wis.medicine < 0 ? "" : "+"}{player.skills.wis.medicine}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                    >
                            Perception
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.wis.perception < 0 ? "" : "+"}{player.skills.wis.perception}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                    >
                            Survival
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.wis.survival < 0 ? "" : "+"}{player.skills.wis.survival}
                    </div>
                </div>
            </div>
        </div>
    );
}

const ChaSkills = ({player}) => {
    return (
        <div className={styles.tableColumn}>
            <Head>
                <b>Charisma</b>
                <Bonus>
                    (Base: {player.stats.cha >= 0 ? "+" : ""}{player.stats.cha})
                </Bonus>
            </Head>
            <div className={styles.table}>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                    >
                        Saving Throw
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.cha.save < 0 ? "" : "+"}{player.skills.cha.save}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                    >
                        Deception
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.cha.deception < 0 ? "" : "+"}{player.skills.cha.deception}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                    >
                        Intimidation
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.cha.intimidation < 0 ? "" : "+"}{player.skills.cha.intimidation}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                    >
                        Performance
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.cha.performance < 0 ? "" : "+"}{player.skills.cha.performance}
                    </div>
                </div>
                <div className={styles.tableRow}>
                    <div
                        className={styles.tableColumn}
                    >
                        Persuasion
                    </div>
                    <div className={styles.tableColumn}>
                        {player.skills.cha.persuasion < 0 ? "" : "+"}{player.skills.cha.persuasion}
                    </div>
                </div>
            </div>
        </div>
    );
}


const Main = styled.div`
  width: 165px;
  border: 1px solid #000;
  padding: 5px;
  border-radius: 5px;
  background: white;
`

function SkillsNode({data: {type, player}}) {
    switch (type) {
        case 'str':
            return <Main>
                <StrSkills player={player}/>
            </Main>;
        case 'dex':
            return <Main>
                <DexSkills player={player}/>
            </Main>;
        case 'con':
            return <Main>
                <ConSkills player={player}/>
            </Main>;
        case 'int':
            return <Main>
                <IntSkills player={player}/>
            </Main>;
        case 'wis':
            return <Main>
                <WisSkills player={player}/>
            </Main>;
        case 'cha':
            return <Main>
                <ChaSkills player={player}/>
            </Main>;
        default:
            return <div>
                Invalid type: {type}
            </div>
    }
}

export default SkillsNode;