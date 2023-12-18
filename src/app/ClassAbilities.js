export const classAbilities = (player) => ({
    alchemist: [
        {
            type: 'ability',
            id: "bombs",
            data: {
                name: "Throw Bomb",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You throw a bomb at an enemy within 5 to 60 feet.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.dex + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d10, add {player.stats.int}
                    </div>
                    <div>
                        Each enemy within 5 feet has to succeed on a Dexterity saving throw (DV {player.stats.int + 10}) or
                        take half of the rolled damage.
                    </div>
                </>),
            },
            position: {x: 0, y: 0},
        },
        {
            type: 'ability',
            id: "shrapnel",
            data: {
                name: "Shrapnel Bomb",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You throw a bomb at an enemy within 5 to 60 feet.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.dex + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d8, add {player.stats.int}
                    </div>
                    <div>
                        Each enemy within 10 feet has to succeed on a Dexterity saving throw (DV {player.stats.int + 10})
                        or take half of the rolled damage.
                    </div>
                </>),
            },
            position: {x: 170, y: 0},
        },
        {
            type: 'ability',
            id: "hammer",
            data: {
                name: "Light Hammer",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You attack an enemy within 5 feet with a light hammer.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.dex + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d4, add {player.stats.str}
                    </div>
                </>),
            },
            position: {x: 0, y: 150},
        },
        {
            type: 'ability',
            id: "seeking-bomb",
            data: {
                name: "Seeking Bomb",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You throw a bomb at an enemy within 5 feet.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.dex + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d6, add {player.stats.int}
                    </div>
                </>),
            },
            position: {x: 170, y: 150},
        },
        {
            type: 'ability',
            id: "reagent",
            data: {
                name: "Reagents",
                type: "Ability",
                player,
                limit: 3,
                description: (player) => (<>
                    <div>
                        You have access to reagents which you can use to perform certain actions.
                    </div>
                    <div>
                        - Expend one point to add 1d10 to the damage of your next bomb attack.
                    </div>
                    <div>
                        - Expend one point to brew a potion of healing in 10 minutes which heals 2d4 + 2 HP.
                    </div>
                </>),
            },
            position: {x: 340, y: 0},
        },
    ],
    barbarian: [
        {
            id: "rage",
            type: 'ability',
            data: {
                name: "Rage",
                type: "Bonus Action",
                limit: 3,
                player,
                description: "You take half damage from bludgeoning, piercing, and slashing damage for the next minute.",
            },
            position: {x: 0, y: 100},
        },
        {
            id: "frenzy",
            type: 'ability',
            data: {
                name: "Frenzy",
                type: "Ability",
                player,
                description: "While raging you can make one additional attack as a bonus action.",
            },
            position: {x: 0, y: 200},
        },
        {
            id: "danger-sense",
            type: 'ability',
            data: {
                name: "Danger Sense",
                type: "Ability",
                player,
                description: () => (<>
                    <div>
                        You have advantage on Dexterity saving throws against effects that you can see, such as traps
                        and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.
                    </div>
                    <div>
                        Advantage: Roll 2d20, take the higher result.
                    </div>
                </>),
            },
            position: {x: 170, y: 0},
        },
        {
            id: "attack",
            type: 'ability',
            data: {
                name: "Great Axe",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You attack an enemy standing next to you.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.str + 2}
                    </div>
                    <div>
                        To deal damage: Roll 2d6, add {player.stats.str}
                    </div>
                </>),
            },
            position: {x: 0, y: 0},
        }
    ],
    cleric: [
        {
            id: "attack",
            type: 'ability',
            data: {
                name: "Mace",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You attack an enemy standing next to you.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.str + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d6, add {player.stats.str}
                    </div>
                </>),
            },
            position: {x: 340, y: 220},
        },
        {
            id: "sacred-flame",
            type: 'ability',
            data: {
                name: "Sacred Flame",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Flame-like radiance descends on a creature that you can see within 60ft. The
                        target must succeed on a Dexterity saving throw (DC {player.stats.wis + 10}) or take 1d8 damage.
                        The target gains no benefit from cover for this saving throw.
                    </div>
                </>),
            },
            position: {x: 0, y: 0},
        },
        {
            id: "spare-the-dying",
            type: 'ability',
            data: {
                name: "Spare the Dying",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You touch a living creature that has 0 hit points. The creature becomes stable.
                    </div>
                </>),
            },
            position: {x: 0, y: 130},
        },
        //
        {
            id: "cure-wounds",
            type: 'ability',
            data: {
                name: "Cure Wounds",
                type: "Action",
                spellMin: 1,
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot to activate this ability.
                    </div>
                    <div>
                        A creature you touch regains a number of hit points equal to 1d8 + {3 + player.stats.wis}.
                    </div>
                    <div>
                        When you cast it using a spell slot of 2nd level, the healing increases to 2d8
                        + {4 + player.stats.wis}.
                    </div>
                </>),
            },
            position: {x: 170, y: 0},
        },
        {
            id: "healing-word",
            type: 'ability',
            data: {
                name: "Healing Word",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot to activate this ability.
                    </div>
                    <div>
                        A creature of your choice that you can see within 60ft. regains hit points equal to 1d4
                        + {3}.
                    </div>
                    <div>
                        When you cast it using a spell slot of 2nd level, the healing increases to 2d4
                        + {4}.
                    </div>
                </>),
            },
            position: {x: 170, y: 145},
        },
        {
            id: "guiding-bolt",
            type: 'ability',
            data: {
                name: "Guiding Bolt",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot to activate this ability.
                    </div>
                    <div>
                        A flash of light streaks toward a creature of your choice within range. Make a ranged spell
                        attack against the target. On a hit, the target takes 4d6 damage, and the next attack
                        roll made against this target before the end of your next turn has advantage, thanks to the
                        mystical dim light glittering on the target until then.
                    </div>
                    <div>
                        When you cast this spell using a spell slot of 2nd level, the damage increases to 5d6.
                    </div>
                </>),
            },
            position: {x: 340, y: 0},
        },
        {
            id: "prayer-of-healing",
            type: 'ability',
            data: {
                name: "Prayer of Healing",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot <b>of second level</b> to activate this ability.
                    </div>
                    <div>
                        Up to six creatures of your choice that you can see within range each regain hit points equal to
                        2d8 + {4}.
                    </div>
                </>),
            },
            position: {x: 0, y: 220},
        },
        {
            id: "channel-divinity",
            type: 'ability',
            data: {
                name: "Preserve Life",
                type: "Action",
                limit: 1,
                player,
                description: (player) => (<>
                    <div>
                        As an action, you present your holy symbol and evoke healing energy that can restore 20 hit
                        points. Choose any creatures within 30 feet of you and divide those hit points among them.
                    </div>
                </>),
            },
            position: {x: 510, y: 0},
        },
        {
            id: "presidigitation",
            type: 'ability',
            data: {
                name: "Presidigitation",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Create a very simple magical effect within 10 feet of you. Examples include:
                    </div>
                    <div>
                        You instantaneously light or snuff out a candle, a torch, or a small campfire.
                    </div>
                    <div>
                        You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.
                    </div>
                    <div>
                        You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.
                    </div>
                    <div>
                        You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts
                        until the end of your next turn.
                    </div>
                </>),
            },
            position: {x: 680, y: 0},
        },
    ],
    druid: [
        {
            id: "attack",
            type: 'ability',
            data: {
                name: "Quarterstaff",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You attack an enemy standing next to you.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.str + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d6, add {player.stats.str}
                    </div>
                </>),
            },
            position: {x: 0, y: 0},
        },
        {
            id: "wild-shape",
            type: 'ability',
            data: {
                name: "Wild Shape",
                type: "Bonus Action",
                limit: 2,
                player,
                description: (player) => (<>
                    <div>
                        You transform into a&nbsp;
                        <a href={"https://www.dndbeyond.com/monsters/17062-wolf"} target={"_blank"}>wolf</a>,&nbsp;
                        <a href={"https://www.dndbeyond.com/monsters/16812-boar"} target={"_blank"}>boar</a> or&nbsp;
                        <a href={"https://www.dndbeyond.com/monsters/16816-brown-bear"} target={"_blank"}>bear</a>.
                    </div>
                    <div>
                        You can stay in a beast shape for 2 hours. You then revert to your normal form unless you expend
                        another use of this feature. You can revert to your normal form earlier by using a bonus action
                        on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.
                    </div>
                </>),
            },
            position: {x: 0, y: 0},
        },
        {
            id: "poison-spray",
            type: 'ability',
            data: {
                name: "Poison Spray",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You extend your hand toward a creature you can see within 10ft. and project a puff of noxious
                        gas from your palm. The creature must succeed on a Constitution saving throw
                        (DV {10 + player.stats.wis}) or take 1d12 poison damage.
                    </div>
                </>),
            },
            position: {x: 170, y: 0},
        },
        {
            id: "produce-flame",
            type: 'ability',
            data: {
                name: "Produce Flame",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        A flickering flame appears in your hand. The flame remains there for ten minutes and harms
                        neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light
                        for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it
                        again.

                        You can also attack with the flame, although doing so ends the spell. When you cast this spell,
                        or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you.
                    </div>
                    <div>
                        To attack roll 1d20, add {player.stats.wis + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d8.
                    </div>
                </>),
            },
            position: {x: 170, y: 130},
        },
        {
            id: "entangle",
            type: 'ability',
            data: {
                name: "Entangle",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot to activate this ability.
                    </div>
                    <div>
                        Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within
                        90ft. of you. For the duration, these plants turn the ground in the area into difficult terrain,
                        meaning that it costs 2 feet of movement for every 1 foot moved.

                        A creature in the area when you cast the spell must succeed on a Strength saving throw
                        (DV {10 + player.stats.wis}) or be restrained by the entangling plants until the spell ends. A
                        creature restrained by the plants can use its action to make a Strength check against your spell
                        save DC ({10 + player.stats.wis}). On a success, it frees itself.

                        When the spell ends, the conjured plants wilt away.
                    </div>
                </>),
            },
            position: {x: 340, y: 0},
        },
        {
            id: "speak-with-animals",
            type: 'ability',
            data: {
                name: "Speak with Animals",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot to activate this ability.
                    </div>
                    <div>
                        You gain the ability to comprehend and verbally communicate with beasts for the next ten
                        minutes. The knowledge and awareness of many beasts is limited by their intelligence, but at
                        minimum, beasts can give you information about nearby locations and monsters, including whatever
                        they can perceive or have perceived within the past day. You might be able to persuade a beast
                        to perform a small favor for you, at the DM’s discretion.
                    </div>
                </>),
            },
            position: {x: 510, y: 0},
        },
        {
            id: "moonbeam",
            type: 'ability',
            data: {
                name: "Moonbeam",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot <b>of second level</b> to activate this ability.
                    </div>
                    <div>
                        A silvery beam of pale light shines down in a 5-foot radius, 40-foot-high cylinder centered on a
                        point within range. Until the spell ends, dim light fills the cylinder.

                        When a creature enters the spell’s area for the first time on a turn or starts its turn there,
                        it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving
                        throw (DV {10 + player.stats.wis}). It takes 2d10 damage on a failed save, or half as
                        much damage on a successful one.

                        On each of your turns after you cast this spell, you can use an action to move the beam up to 60
                        feet in any direction.
                    </div>
                </>),
            },
            position: {x: 680, y: 0},
        },
        {
            id: "combat-wild-shape",
            type: 'ability',
            data: {
                name: "Combat Wild Shape",
                type: "Ability",
                player,
                description: (player) => (<>
                    <div>
                        While you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to
                        regain 1d8 hit points per level of the spell slot expended.
                    </div>
                </>),
            },
            position: {x: 0, y: 190},
        },
        {
            id: "presidigitation",
            type: 'ability',
            data: {
                name: "Presidigitation",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Create a very simple magical effect within 10 feet of you. Examples include:
                    </div>
                    <div>
                        You instantaneously light or snuff out a candle, a torch, or a small campfire.
                    </div>
                    <div>
                        You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.
                    </div>
                    <div>
                        You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.
                    </div>
                    <div>
                        You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts
                        until the end of your next turn.
                    </div>
                </>),
            },
            position: {x: 850, y: 0},
        },
    ],
    fighter: [
        {
            id: "second-wind",
            type: 'ability',
            data: {
                name: "Second Wind",
                type: "Bonus Action",
                limit: 1,
                player,
                description: (player) => (<>
                    <div>
                        You can use a bonus action to regain 1d10 + 4 hit points.
                    </div>
                </>),
            },
            position: {x: 0, y: 0},
        },
        {
            id: "second-wind",
            type: 'ability',
            data: {
                name: "Second Wind",
                type: "Bonus Action",
                limit: 1,
                player,
                description: (player) => (<>
                    <div>
                        You can use a bonus action to regain 1d10 + 4 hit points.
                    </div>
                </>),
            },
            position: {x: 0, y: 0},
        },
        {
            id: "action-surge",
            type: 'ability',
            data: {
                name: "Action Surge",
                type: "Free Action",
                limit: 1,
                player,
                description: (player) => (<>
                    <div>
                        You can perform one additional action during your turn.
                    </div>
                </>),
            },
            position: {x: 0, y: 90},
        },
        {
            id: "improved-critical",
            type: 'ability',
            data: {
                name: "Improved Critical",
                type: "Ability",
                player,
                description: (player) => (<>
                    <div>
                        Your weapon attacks score a critical hit on a roll of 19 or 20.
                    </div>
                </>),
            },
            position: {x: 0, y: 180},
        },
        {
            id: "attack",
            type: 'ability',
            data: {
                name: "Longsword",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You attack an enemy standing next to you.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.str + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1D10, add {player.stats.str}
                    </div>
                    <div>
                        If you wield your shield, to deal damage: Roll 1D8, add {player.stats.str}
                    </div>
                </>),
            },
            position: {x: 170, y: 0},
        },
    ],
    warmage: [
        {
            id: "force-dart",
            type: 'ability',
            data: {
                name: "Force Dart",
                type: "Action, Cantrip",
                player,
                description: (player) => (<>
                    <div>
                        You fling a dart of magical force at a creature or object between 5 feet and 120 feet.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.int + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d10, add {player.stats.int}
                    </div>
                </>),
            },
            position: {x: 0, y: 0},
        },
        {
            id: "blasting-cantrip",
            type: 'ability',
            data: {
                name: "Blasting Cantrip",
                type: "Ability",
                player,
                description: (player) => (<>
                    <div>
                        Once on each of your turns, when you deal force
                        damage to a creature with a cantrip, you
                        can push the creature up to 10 feet away from you in
                        a straight line.
                    </div>
                </>),
            },
            position: {x: 0, y: 110},
        },

        {
            id: "force-buckler",
            type: 'ability',
            data: {
                name: "Force Buckler",
                type: "Bonus Action, Cantrip",
                player,
                description: (player) => (<>
                    <div>
                        You summon a translucent yet visible field of force, which springs forth from the prepared
                        gauntlet. Until the start of your next turn, this shield grants you a +2 bonus to your Armor
                        Class. This spell ends early if you are hit by an attack.
                    </div>
                </>),
            },
            position: {x: 170, y: 0},
        },
        {
            id: "mystical-armor",
            type: 'ability',
            data: {
                name: "Mystical Armor",
                type: "Ability",
                player,
                description: (player) => (<>
                    <div>
                        You are permanently protected by a magical armor. Your AC is increased (This ability is already
                        included in your AC).
                    </div>
                </>),
            },
            position: {x: 170, y: 130},
        },
        {
            id: "force-breastplate",
            type: 'ability',
            data: {
                name: "Force Breastplate",
                type: "Ability",
                player,
                description: (player) => (<>
                    <div>
                        You can add your Intelligence modifier, instead of Dexterity, to your Armor Class (This ability
                        is already included in your AC).
                    </div>
                </>),
            },
            position: {x: 170, y: 230},
        },

        {
            id: "mage-hand",
            type: 'ability',
            data: {
                name: "Mage Hand",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        A spectral, floating hand appears at a point you choose within 30 feet. The hand lasts for the
                        duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet
                        away from you or if you cast this spell again.
                    </div>
                    <div>
                        You can use your action to control the hand. You can use the hand to manipulate an object, open
                        an unlocked door or container, stow or retrieve an item from an open container, or pour the
                        contents out of a vial. You can move the hand up to 30 feet each time you use it.
                    </div>
                    <div>
                        The hand can’t attack, activate magical items, or carry more than 10 pounds. It disappears after
                        one minute.
                    </div>
                </>),
            },
            position: {x: 680, y: 0},
        },
        {
            id: "force-weapon",
            type: 'ability',
            data: {
                name: "Force Weapon",
                type: "Action, Cantrip",
                player,
                description: (player) => (<>
                    <div>
                        You conjure a blade of magical force in the air, which
                        lashes out at your foes. Make a melee spell attack
                        against a creature within 5 feet. On a hit, the target
                        takes 1d10 force damage.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.int + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d10, add {player.stats.int}
                    </div>
                </>),
            },
            position: {x: 340, y: 0},
        },
        {
            id: "mystical-weapon",
            type: 'ability',
            data: {
                name: "Mytical Weapon",
                type: "Ability",
                player,
                description: (player) => (<>
                    <div>
                        You possess a weapon made entirely of magical force. Whenever you would draw a
                        weapon, you can summon this weapon to your empty hand and transform it into any simple or
                        martial weapon of your choice. This weapon deals force damage on a hit instead of its normal
                        damage type. Whenever the weapon leaves your hand, it vanishes into a pocket dimension until you
                        summon it again
                    </div>
                    <div>
                        Note: Since there are a lot of weapons, I can't list concrete stats here.
                        Just use this for flavor and attack using force weapon if you are forced into melee combat.
                    </div>
                </>),
            },
            position: {x: 340, y: 150},
        },

        {
            id: "presidigitation",
            type: 'ability',
            data: {
                name: "Presidigitation",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Create a very simple magical effect within 10 feet of you. Examples include:
                    </div>
                    <div>
                        You instantaneously light or snuff out a candle, a torch, or a small campfire.
                    </div>
                    <div>
                        You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.
                    </div>
                    <div>
                        You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.
                    </div>
                    <div>
                        You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts
                        until the end of your next turn.
                    </div>
                </>),
            },
            position: {x: 510, y: 0},
        },
        {
            id: "chiavalrous-presence",
            type: 'ability',
            data: {
                name: "Chiavalrous Presence",
                type: "Action, Cantrip",
                player,
                description: (player) => (<>
                    <div>
                        You have advantage on ability checks you make to interact with nobility (Roll 2d20, take the
                        highest). Additionally, other creatures can always discern when you’re telling the truth.
                    </div>
                    <div>
                        Note: This doesn't mean they automatically know when you're lying, but they believe in every
                        true statement you give - no matter how absurd.
                    </div>
                </>),
            },
            position: {x: 510, y: 240},
        },
    ],
    wizard: [
        {
            id: "attack",
            type: 'ability',
            data: {
                name: "Quarterstaff",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You attack an enemy standing next to you.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.str + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d8, add {player.stats.str}
                    </div>
                </>),
            },
            position: {x: 0, y: 0},
        },
        {
            id: "arcane-recovery",
            type: 'ability',
            data: {
                name: "Arcane Recovery",
                type: "Out of combat action",
                limit: 1,
                player,
                description: (player) => (<>
                    <div>
                        You restore two spell slots level one <b>or</b> one spell slot level two.
                    </div>
                </>),
            },
            position: {x: 0, y: 100},
        },
        {
            id: "sculpt-spells",
            type: 'ability',
            data: {
                name: "Sculpt Spells",
                type: "Ability",
                player,
                description: (player) => (<>
                    <div>
                        You can create pockets of relative safety within the effects of your spells. When you
                        cast a spell that affects other creatures that you can see, you can choose a number
                        of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their
                        saving throws against the spell, and they take no damage if they would normally take half damage
                        on a successful save.
                    </div>
                </>),
            },
            position: {x: 0, y: 190},
        },
        {
            id: "fire-bolt",
            type: 'ability',
            data: {
                name: "Fire Bolt",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against
                        a target within 120 ft. On a hit, the target takes 1d10 damage. A flammable object hit by this
                        spell ignites if it isn’t being worn or carried.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.int + 2}
                    </div>
                    <div>
                        To deal damage: Roll 1d10.
                    </div>
                </>),
            },
            position: {x: 170, y: 0},
        },
        {
            id: "mage-hand",
            type: 'ability',
            data: {
                name: "Mage Hand",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        A spectral, floating hand appears at a point you choose within 30 feet. The hand lasts for the
                        duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet
                        away from you or if you cast this spell again.
                    </div>
                    <div>
                        You can use your action to control the hand. You can use the hand to manipulate an object, open
                        an unlocked door or container, stow or retrieve an item from an open container, or pour the
                        contents out of a vial. You can move the hand up to 30 feet each time you use it.
                    </div>
                    <div>
                        The hand can’t attack, activate magical items, or carry more than 10 pounds. It disappears after
                        one minute.
                    </div>
                </>),
            },
            position: {x: 170, y: 150},
        },
        {
            id: "burning-hands",
            type: 'ability',
            data: {
                name: "Burning Hands",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot to activate this ability.
                    </div>
                    <div>
                        As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots
                        forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity
                        saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a
                        successful one.
                    </div>
                    <div>
                        The fire ignites any flammable objects in the area that aren’t being worn or carried.
                    </div>
                    <div>
                        When you cast this spell using a spell slot of 2nd level, the damage increases to 4d6.
                    </div>
                </>),
            },
            position: {x: 340, y: 160},
        },
        {
            id: "mage-armor",
            type: 'ability',
            data: {
                name: "Mage Armor",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot to activate this ability.
                    </div>
                    <div>
                        You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds
                        it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell
                        ends if the target dons armor, if you dismiss the spell as an action or after eight hours.
                    </div>
                </>),
            },
            position: {x: 340, y: 0},
        },
        {
            id: "witch-bolt",
            type: 'ability',
            data: {
                name: "Witch Bolt",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot to activate this ability.
                    </div>
                    <div>
                        A beam of crackling, blue energy lances out toward a creature within 30 feet, forming a
                        sustained arc of lightning between you and the target. Make a ranged spell attack against that
                        creature. On a hit, the target takes 1d12 damage.
                    </div>
                    <div>
                        On each of your turns for the next minute, you can use your action to deal 1d12 damage to the
                        target automatically. The spell ends if you use your action to do anything else. The spell also
                        ends if the target is ever outside the spell’s range or if it has total cover from you.
                    </div>
                    <div>
                        When you cast this spell using a spell slot of 2nd level, the initial damage increases to 2d12.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.int + 2}
                    </div>
                </>),
            },
            position: {x: 510, y: 0},
        },
        {
            id: "aganazzars-scorcher",
            type: 'ability',
            data: {
                name: "Aganazzar's Scorcher",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot <b>of second level</b> to activate this ability.
                    </div>
                    <div>
                        A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you
                        choose. Each creature in the line must make a Dexterity saving throw (DV {player.stats.int + 10}.
                        A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.
                    </div>
                </>),
            },
            position: {x: 680, y: 0},
        },
        {
            id: "scorching-ray",
            type: 'ability',
            data: {
                name: "Scorching Ray",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Spend a spell slot <b>of second level</b> to activate this ability.
                    </div>
                    <div>
                        You create three rays of fire and hurl them at targets within range. You can hurl them at one
                        target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire
                        damage.
                    </div>
                    <div>
                        When you cast this spell using a spell slot of 2nd level, the damage increases to 4d8.
                    </div>
                    <div>
                        To attack: Roll 1d20, add {player.stats.int + 2}
                    </div>
                </>),
            },
            position: {x: 680, y: 160},
        },
        {
            id: "presidigitation",
            type: 'ability',
            data: {
                name: "Presidigitation",
                type: "Action",
                player,
                description: (player) => (<>
                    <div>
                        Create a very simple magical effect within 10 feet of you. Examples include:
                    </div>
                    <div>
                        You instantaneously light or snuff out a candle, a torch, or a small campfire.
                    </div>
                    <div>
                        You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.
                    </div>
                    <div>
                        You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.
                    </div>
                    <div>
                        You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts
                        until the end of your next turn.
                    </div>
                </>),
            },
            position: {x: 850, y: 0},
        },
    ]
})