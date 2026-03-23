// [customrecipe] type=Remove | out=stonezone:mcf/quark/jasper_brick_railing_gate | heat=output
ServerEvents.recipes(event => {
  event.remove({ output: 'stonezone:mcf/quark/jasper_brick_railing_gate' })
})
