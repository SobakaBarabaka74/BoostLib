import * as boost from './BoostLib.js'
import {
  Teams
} as api from 'pixel_combats/room'

boost.SaveList.Enable = true
boost.SaveList.List = [{
  {
    Name: "Kills", 
    Default: 0
  }
}];
