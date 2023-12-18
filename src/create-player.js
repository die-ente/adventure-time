import {classSkills, classStats, raceStats} from "@/player-stat-presets";

export const createPlayer = (name, playerClass, playerRace) => {
    const stats = {
        str: classStats[playerClass].str + raceStats[playerRace].str,
        dex: classStats[playerClass].dex + raceStats[playerRace].dex,
        con: classStats[playerClass].con + raceStats[playerRace].con,
        int: classStats[playerClass].int + raceStats[playerRace].int,
        wis: classStats[playerClass].wis + raceStats[playerRace].wis,
        cha: classStats[playerClass].cha + raceStats[playerRace].cha
    }
    const classAC = {
        alchemist: `${11 + stats.dex}`,
        barbarian: `${10 + stats.dex + stats.con}`,
        cleric: `${16}`,
        druid: `${11 + stats.dex}`,
        fighter: `${14 + Math.min(2, stats.dex)} (${16 + Math.min(2, stats.dex)} with shield)`,
        warmage: `${14 + stats.int}`,
        wizard: `${10 + stats.dex} (${13 + stats.dex} with mage armor)`
    }
    const classHP = {
        alchemist: 6 + 4*3 + stats.con*4,
        barbarian: 12 + 7*3 + stats.con*4,
        cleric: 8 + 5*3 + stats.con*4,
        druid: 8 + 5*3 + stats.con*4,
        fighter: 10 + 6*3 + stats.con*4,
        warmage: 8 + 5*3 + stats.con*4,
        wizard: 6 + 4*3 + stats.con*4,
    }
    return {
        name,
        playerClass,
        playerRace,
        ac: classAC[playerClass] ?? 10,
        speed: "30ft.",
        maxHP: classHP[playerClass] ?? 10,
        stats,
        skills: {
            str: {
                save: stats.str + (classSkills[playerClass].str ?? 0),
                athletics: stats.str + (classSkills[playerClass].athletics ?? 0)
            },
            dex: {
                save: stats.dex + (classSkills[playerClass].dex ?? 0),
                acrobatics: stats.dex + (classSkills[playerClass].acrobatics ?? 0),
                sleightOfHand: stats.dex + (classSkills[playerClass].sleightOfHand ?? 0),
                stealth: stats.dex + (classSkills[playerClass].stealth ?? 0)
            },
            con: {
                save: stats.con + (classSkills[playerClass].con ?? 0)
            },
            int: {
                save: stats.int + (classSkills[playerClass].int ?? 0),
                arcana: stats.int + (classSkills[playerClass].arcana ?? 0),
                history: stats.int + (classSkills[playerClass].history ?? 0),
                investigation: stats.int + (classSkills[playerClass].investigation ?? 0),
                nature: stats.int + (classSkills[playerClass].nature ?? 0),
                religion: stats.int + (classSkills[playerClass].religion ?? 0)
            },
            wis: {
                save: stats.wis + (classSkills[playerClass].wis ?? 0),
                animalHandling: stats.wis + (classSkills[playerClass].animalHandling ?? 0),
                insight: stats.wis + (classSkills[playerClass].insight ?? 0),
                medicine: stats.wis + (classSkills[playerClass].medicine ?? 0),
                perception: stats.wis + (classSkills[playerClass].perception ?? 0),
                survival: stats.wis + (classSkills[playerClass].survival ?? 0)
            },
            cha: {
                save: stats.cha + (classSkills[playerClass].cha ?? 0),
                deception: stats.cha + (classSkills[playerClass].deception ?? 0),
                intimidation: stats.cha + (classSkills[playerClass].intimidation ?? 0),
                performance: stats.cha + (classSkills[playerClass].performance ?? 0),
                persuasion: stats.cha + (classSkills[playerClass].persuasion ?? 0)
            }
        }
    }
}