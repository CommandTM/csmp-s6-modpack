// [customrecipe] type=Remove | out=stonezone:mcb/biomeswevegone/red_rock_brick_bridge | in=stonezone:mcb/biomeswevegone/red_rock_brick_bridge | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'stonezone:mcb/biomeswevegone/red_rock_brick_bridge' })
})
