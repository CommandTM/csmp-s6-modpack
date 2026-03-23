// [customrecipe] type=Remove | out=stonezone:mcf/quark/limestone_brick_railing_gate | in=stonezone:mcf/quark/limestone_brick_railing_gate_limestonecutter | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'stonezone:mcf/quark/limestone_brick_railing_gate_limestonecutter' })
})
