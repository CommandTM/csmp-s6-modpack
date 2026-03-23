// [customrecipe] type=Remove | out=stonezone:mcb/biomeswevegone/dacite_brick_bridge | in=stonezone:mcb/biomeswevegone/dacite_brick_bridge | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'stonezone:mcb/biomeswevegone/dacite_brick_bridge' })
})
