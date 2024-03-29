function main () 
{

import * as boost from './BoostLib.js'
import {
  Teams, LeaderBoard, Properties, Spawns, Players, Ui
} as api from 'pixel_combats/room'
import { Color, DisplayValueHeader } as basic from 'pixel_combats/basic'

boost.Boost.SaveList.Enable = true
boost.Boost.SaveList.List = [
  {
    Name: "Kills", 
    Default: 0
  }
]

api.Teams.Add("Blud", "Teams/Blue", new basic.Color(0, 0, 1, 0)) 
api.Teams.OnRequestJoinTeam.Add(function(p, t) {
  t.add(p)
  p.Spawns.Spawn()
  p.Properties.Kills.Value++
})

api.LeaderBoard.PlayerLeaderBoardValues = [
	new basic.DisplayValueHeader("Kills", "Statistics/Kills", "Statistics/KillsShort")
]

}

try { main() } catch(obj) {
  api.Ui.GetContext().Hint.Value = obj.message
}
