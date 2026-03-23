// [customrecipe] type=Remove | out=stonezone:mcf/quark/soul_sandstone_brick_railing_gate | heat=output
ServerEvents.recipes(event => {
  event.remove({ output: 'stonezone:mcf/quark/soul_sandstone_brick_railing_gate' })
})
