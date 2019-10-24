import React, {useState} from "react"
import teamsData from "./utahTeams"
import Team from "./Team"

const App = () => {
    const [teams] = useState(teamsData)
    // console.log(teams[32])
    // const wkNineTeams = teams.map(team=>team.schedule.filter(game=>game.result!==null))
    // console.log(wkNineTeams[32])
    // const wkNineWins = teams.map(team=>team.schedule.filter(game=>game.result===team.team))
    
    // console.log(wkNineWins[32])
    
    // const winValue32 = (wkNineWins[32].map(game=>game.wv))
    // const gameValue32 = wkNineTeams[32].length * teams[32].gv
    
    // console.log(winValue32)
    
    // const winSum = winValue32[0] > 0 ? winValue32.reduce((x,y)=>x+y) : 0
    // console.log(winSum)
    // const mwp32 = winSum / gameValue32
    // console.log(mwp32)

    // const updatedTeamsWinValues = teams.map((team,i)=>wkNineWins[i].map(game=>game.wv))
    // console.log(updatedTeamsWinValues[32])
    teams.forEach((team,i)=>team.winTeams=team.schedule.filter(game=>game.result===team.team))
    teams.forEach((team,i)=>team.winValues=team.winTeams.map(game=>game.wv))
    teams.forEach((team,i)=>team.wvSum=team.winValues.reduce((x,y)=>{return x+y},0))
    teams.forEach((team,i)=>team.mwp=team.wvSum/(team.schedule.length * team.gv))
    teams.forEach((team,i)=>
        team.opps=
            team.schedule.map(opp=>teams.find(opponent=>opponent ?opponent.team===opp.opponent : 1.5))
    )

    // //test of two teams rpi scores without omitting team from opponent mwp **
    // // box elder
    // console.log(teams.find(team=>team.team === "Spanish Fork"))
    // const boxElder = teams.find(team=>team.team === "Box Elder")
    // const boxElderOppsMwp = boxElder.opps.map(team=>team!==undefined?team.mwp:1.5)
    // const boxElderOppsMwpReduce = boxElderOppsMwp.reduce((x,y)=>x + y)

    // const boxElderOppsOpps = boxElder.opps.map(team=>team.opps.map(oppopp=>oppopp!==undefined?oppopp.mwp:1.5)).flat()
    // const boxElderOppsOppsReduce = boxElderOppsOpps.reduce((x,y)=>x + y)
    // const boxElderRPI = (boxElder.mwp * .4) + ((boxElderOppsMwpReduce/boxElderOppsMwp.length) * .4) + ((boxElderOppsOppsReduce/boxElderOppsOpps.length) * .2) 
    // console.log(`Box Elder RPI: ${boxElderRPI}`)
    // console.log(boxElder.mwp, boxElderOppsMwpReduce/boxElderOppsMwp.length, 
    //     boxElderOppsOppsReduce/boxElderOppsOpps.length)
    // // spanish fork
    // const spanishFork = teams.find(team=>team.team === "Spanish Fork")
    // const spanishForkOppsMwp = spanishFork.opps.map(team=>team!==undefined?team.mwp:1.5)
    // const spanishForkOppsMwpReduce = spanishForkOppsMwp.reduce((x,y)=>x + y)

    // const spanishForkOppsOpps = spanishFork.opps.map(team=>team.opps.map(oppopp=>oppopp!==undefined?oppopp.mwp:1.5)).flat()
    // const spanishForkOppsOppsReduce = spanishForkOppsOpps.reduce((x,y)=>x + y)
    // const spanishForkRPI = (spanishFork.mwp * .4) + ((spanishForkOppsMwpReduce/spanishForkOppsMwp.length) * .4) + ((spanishForkOppsOppsReduce/spanishForkOppsOpps.length) * .2) 
    // console.log(`Spanish Fork RPI: ${spanishForkRPI}`)
    // console.log(spanishFork.mwp, spanishForkOppsMwpReduce/spanishForkOppsMwp.length, 
    //     spanishForkOppsOppsReduce/spanishForkOppsOpps.length)

    // // bonneville
    // const bonneville = teams.find(team=>team.team === "Bonneville")
    // const bonnevilleOppsMwp = bonneville.opps.map(team=>team!==undefined?team.mwp:1.5)
    // const bonnevilleOppsMwpReduce = bonnevilleOppsMwp.reduce((x,y)=>x + y)

    // const bonnevilleOppsOpps = bonneville.opps.map(team=>team.opps.map(oppopp=>oppopp!==undefined?oppopp.mwp:1.5)).flat()
    // const bonnevilleOppsOppsReduce = bonnevilleOppsOpps.reduce((x,y)=>x + y)
    // const bonnevilleRPI = (bonneville.mwp * .4) + ((bonnevilleOppsMwpReduce/bonnevilleOppsMwp.length) * .4) + ((bonnevilleOppsOppsReduce/bonnevilleOppsOpps.length) * .2) 
    // console.log(`Bonneville RPI: ${bonnevilleRPI}`)
    // console.log(bonneville.mwp, bonnevilleOppsMwpReduce/bonnevilleOppsMwp.length, 
    //     bonnevilleOppsOppsReduce/bonnevilleOppsOpps.length)

    // // wasatch
    // const wasatch = teams.find(team=>team.team === "Wasatch")
    // const wasatchOppsMwp = wasatch.opps.map(team=>team!==undefined?team.mwp:1.5)
    // const wasatchOppsMwpReduce = wasatchOppsMwp.reduce((x,y)=>x + y)

    // const wasatchOppsOpps = wasatch.opps.map(team=>team!==undefined&&team.opps.map(oppopp=>oppopp!==undefined?oppopp.mwp:1.5)).flat()
    // const wasatchOppsOppsReduce = wasatchOppsOpps.reduce((x,y)=>x + y)
    // const wasatchRPI = (wasatch.mwp * .4) + ((wasatchOppsMwpReduce/wasatchOppsMwp.length) * .4) + ((wasatchOppsOppsReduce/wasatchOppsOpps.length) * .2) 
    // console.log(`Wasatch RPI: ${wasatchRPI}`)
    // console.log(wasatch.mwp, wasatchOppsMwpReduce/wasatchOppsMwp.length, 
    //     wasatchOppsOppsReduce/wasatchOppsOpps.length)
    // // woodsCross
    // const woodsCross = teams.find(team=>team.team === "Woods Cross")
    // const woodsCrossOppsMwp = woodsCross.opps.map(team=>team!==undefined?team.mwp:1.5)
    // const woodsCrossOppsMwpReduce = woodsCrossOppsMwp.reduce((x,y)=>x + y)

    // const woodsCrossOppsOpps = woodsCross.opps.map(team=>team!==undefined&&team.opps.map(oppopp=>oppopp!==undefined?oppopp.mwp:1.5)).flat()
    // const woodsCrossOppsOppsReduce = woodsCrossOppsOpps.reduce((x,y)=>x + y)
    // const woodsCrossRPI = (woodsCross.mwp * .4) + ((woodsCrossOppsMwpReduce/woodsCrossOppsMwp.length) * .4) + ((woodsCrossOppsOppsReduce/woodsCrossOppsOpps.length) * .2) 
    // console.log(`woodsCross RPI: ${woodsCrossRPI}`)
    // console.log(woodsCross.mwp, woodsCrossOppsMwpReduce/woodsCrossOppsMwp.length, 
    //     woodsCrossOppsOppsReduce/woodsCrossOppsOpps.length)
    // // ** end of test

    // try to implement w/forEach
    
    // calculate owp (generic for out of state opponents (1.5 wv) and wo omission of team as opponent)
    
    // console.log(teams[27].opps.map(opp=>opp.opps.filter(target=>target.team !== teams[27].team)))

    //working omission!!!for owp
    // console.log(teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team)).map(tm=>tm.map(game=>game.wv).reduce((x,y)=>x+y)))

    //working omission with reduced wvalue sums
    // console.log(teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team)).map(tm=>tm.map(game=>game.wv).reduce((x,y)=>x+y)).map(element=>element))

    // console.log(teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team)).map(tm=>tm.map(game=>game.wv).reduce((x,y)=>x+y)).map((element,i)=>element/(teams[27].opps[i].schedule.length * teams[27].opps[i].gv)))

    // console.log(teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team)).map(tm=>tm.map(game=>game.wv).reduce((x,y)=>x+y)).map((element,i)=>element/(teams[27].opps[i].schedule.length - 1 * teams[27].opps[i].gv)))

    const owp = teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team)).map(tm=>tm.map(game=>game.wv).reduce((x,y)=>x+y)).map((elem,i)=>elem/(teams[27].opps.map((element,i)=>element.gv).map((gameValue,i)=>gameValue*teams[27].opps[i].schedule.length - 1)[i])).reduce((a,b)=>a + b)/(teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team)).map(tm=>tm.map(game=>game.wv).reduce((x,y)=>x+y)).map((elem,i)=>elem/(teams[27].opps.map((element,i)=>element.gv).map((gameValue,i)=>gameValue*teams[27].opps[i].schedule.length - 1)[i])).length)


    console.log(owp)
    
    // const gv27 = teams[27].opps.map((element,i)=>element.gv).map((gameValue,i)=>gameValue*teams[27].opps[i].schedule.length - 1)
    // // (teams[27].opps.map((element,i)=>element.schedule.length))
    // console.log(wv27.map((element,i)=>element/gv27[i]))
    // console.log(wv27.map((element,i)=>element/gv27[i]).reduce((x,y)=>x+y)/wv27.map((element,i)=>element/gv27[i]).length)

    // console.log(teams[27].opps[1].schedule.length - 1 * teams[27].opps[1].gv)

    // console.log(teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team)).map(tm=>tm.map(game=>game.wv).reduce((x,y)=>x+y)).map((element,i)=>element/(teams[27].opps[i].schedule.length * teams[27].opps[i].gv)).reduce((x,y)=>x+y)/(teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team)).map(tm=>tm.map(game=>game.wv).reduce((x,y)=>x+y)).map((element,i)=>element/(teams[27].opps[i].schedule.length * teams[27].opps[i].gv)).length))

    // teams.forEach(team=>team.owp=team.opps.map(opp=>opp!==undefined?opp.mwp:0.75).reduce((x,y)=>x+y)/team.opps.map(team=>team!==undefined?team.mwp:0.75).length)

    // teams.forEach(team=>
    //     team.owp=teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team))
    //     .map(tm=>tm.map(game=>game!==undefined?game.wv:1.55).reduce((x,y)=>x+y))
    //     .map((elem,i)=>elem/(teams[27].opps.map((element,i)=>element.gv).map((gameValue,i)=>gameValue*teams[27].opps[i].schedule.length - 1)[i]))
    //     .reduce((a,b)=>a + b)
    //     /
    //     (teams[27].opps.map(opp=>opp.schedule.filter(target=>target.opponent !== teams[27].team))
    //     .map(tm=>tm.map(game=>game.wv).reduce((x,y)=>x+y))
    //     .map((elem,i)=>elem/(teams[27].opps.map((element,i)=>element.gv).map((gameValue,i)=>gameValue*teams[27].opps[i].schedule.length - 1)[i]))
    //     .length))
    // console.log(
    //     teams.map(team=>team.opps.map((element,i)=>element!==undefined?element.gv:1.55)).map((gameValue,i)=>team.opps[i].schedule===undefined?gameValue*9:null))

    teams.forEach(team=>
        team.owp=team.opps.map(opp=>opp!==undefined?opp.schedule.filter(target=>target.opponent !== team.team):undefined)
        .map(tm=>tm===undefined?1.5:tm.map(game=>game.wv).reduce((x,y)=>x+y))
        .map((elem,i)=>elem/(team.opps.map((element,i)=>element!==undefined?element.gv:1.5).map((gameValue,i)=>!team.opps[i]?gameValue*9:gameValue*team.opps[i].schedule.length - 1)[i]))
        .reduce((a,b)=>a + b)
        /
        (team.opps.map(opp=>opp!==undefined?opp.schedule.filter(target=>target.opponent !== team.team):undefined)
        .map(tm=>tm===undefined?1.5:tm.map(game=>game.wv).reduce((x,y)=>x+y))
        .map((elem,i)=>elem/(team.opps.map((element,i)=>element!==undefined?element.gv:1.5).map((gameValue,i)=>!team.opps[i]?gameValue*9:gameValue*team.opps[i].schedule.length - 1)[i]))
        .length))


    //calculate oowp
    teams.forEach(team=>team.oowp=team.opps.map(team=>team!==undefined&&team.opps.map(oppopp=>oppopp!==undefined?oppopp.mwp:0.5)).flat().reduce((x,y)=>x + y)/team.opps.map(team=>team!==undefined&&team.opps.map(oppopp=>oppopp!==undefined?oppopp.mwp:0.5)).flat().length)

    // calculate rpi
    teams.forEach(team=>team.rpi=(team.mwp * .4) + (team.owp * .4) + (team.oowp * .2))

    // teams.forEach((team,i)=>
    //     team.opps=
    //         team.opps.forEach(und=>und === undefined ? und=1.5:null)
    // )
    // teams.forEach((team,i)=>
    //     team.oowp=team.opps.map(target=>target ? target.schedule.filter(name=>name.opponent!==team.team) : 1.5)
    // )
    // console.log(teams[100].oowp)
    // teams.forEach((team,i)=>team.oowp=team.opps.schedule.reduce((x,y)=>{return x.mwp + y.mwp},0))

    // teams.forEach((team,i)=>
    //     team.owp=
    //         team.opps.map(target=>target.schedule?target.schedule[0]:null)
    // )
    // console.log(teams[100])

    // console.log(5/9)
    
    // // calculate owp
    // const wkNineTeamsOppts = wkNineTeams.map(team=>Object.keys(team).map(opponent=>team[opponent]))
    // //find opponents schedule, omit observed team, recalculate wins and mwp take average
    // const oppsArr = wkNineTeams.map(opponent=>opponent.map(opp=>teams.filter(team=>team.team === opp.opponent)))
    // // console.log(oppsArr[32])

    // const oppsOfOpps = oppsArr.map(opp=>[...opp])
    // console.log(oppsOfOpps[32])


    // const arrFrom = wkNineTeams.map(team=>Object.values(team))
    // console.log(arrFrom[32])
    const fiveATeams = teams.filter(team=>team.cls===5).sort((a,b)=>b.rpi - a.rpi)
    const teamMap = fiveATeams.map((team,i)=><Team key={team.team} i={i + 1} data={team} />)

    console.log(teams.find(team=>team.team==="Spanish Fork"))

    return (
        <div className="app-container">
            {teamMap}
        </div>
    )
}

export default App