import {
    Teams, Players, Properties
} as Api from 'pixel_combats/room'


export const Boost = {
    
    SaveList: {
        Enable: false, 
        List: []
    }, 
    
};


Api.Teams.OnRequestJoinTeam.Add((p) => {
    if (Boost.SaveList.Enable) my_Load(p)
})

Api.Players.OnPlayerDisconnected.Add((p) => {
    if (Boost.SaveList.Enable) my_Save(p)
})

function my_Load(p) {
    for (let prop of Boost.SaveList.List)
        p.Properties.Get(prop.Name).Value = Api.Properties.GetContext().Get(prop.Name + p.Id)
}

function my_Save(p) {
    for (let prop of Boost.SaveList.List)
        Api.Properties.GetContext().Get(prop.Name + p.Id).Value = p.Properties.Get(prop.Name).Value
}