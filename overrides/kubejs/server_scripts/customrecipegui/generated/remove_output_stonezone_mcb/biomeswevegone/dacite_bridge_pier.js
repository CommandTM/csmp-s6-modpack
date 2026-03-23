// [customrecipe] type=Remove | out=stonezone:mcb/biomeswevegone/dacite_bridge_pier | heat=output
ServerEvents.recipes(event => {
  event.remove({ output: 'stonezone:mcb/biomeswevegone/dacite_bridge_pier' })
})
