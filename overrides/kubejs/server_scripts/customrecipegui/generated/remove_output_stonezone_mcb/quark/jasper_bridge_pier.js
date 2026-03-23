// [customrecipe] type=Remove | out=stonezone:mcb/quark/jasper_bridge_pier | heat=output
ServerEvents.recipes(event => {
  event.remove({ output: 'stonezone:mcb/quark/jasper_bridge_pier' })
})
