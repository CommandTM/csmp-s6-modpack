// [customrecipe] type=Remove | out=stonezone:mcf/biomeswevegone/dacite_brick_railing_gate | in=stonezone:mcf/biomeswevegone/dacite_brick_railing_gate | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'stonezone:mcf/biomeswevegone/dacite_brick_railing_gate' })
})
