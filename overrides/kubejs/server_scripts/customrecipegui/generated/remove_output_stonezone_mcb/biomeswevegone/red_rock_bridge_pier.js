// [customrecipe] type=Remove | out=stonezone:mcb/biomeswevegone/red_rock_bridge_pier | heat=output
ServerEvents.recipes(event => {
  event.remove({ output: 'stonezone:mcb/biomeswevegone/red_rock_bridge_pier' })
})
