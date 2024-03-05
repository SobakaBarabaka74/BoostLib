import * as boost from './BoostLib.js'
import {
  Teams, LeaderBoard
} as api from 'pixel_combats/room'
import { Color } as basic from 'pixel_combats/basic'

boost.Boost.SaveList.Enable = true
boost.Boost.SaveList.List = [
  {
    Name: "Kills", 
    Default: 0
  }
]

api.Teams.Add("Blud", "Teams/Blue", new basic.Color(0, 0, 1, 0)) 

api.LeaderBoard.PlayerLeaderBoardValues = [
	new DisplayValueHeader("Kills", "Statistics/Kills", "Statistics/KillsShort")
]
