// [customrecipe] type=Remove | out=stonezone:mcf/biomeswevegone/red_rock_brick_railing_gate | in=stonezone:mcf/biomeswevegone/red_rock_brick_railing_gate | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'stonezone:mcf/biomeswevegone/red_rock_brick_railing_gate' })
})
