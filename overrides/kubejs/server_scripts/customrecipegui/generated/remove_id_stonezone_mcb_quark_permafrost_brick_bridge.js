// [customrecipe] type=Remove | out=stonezone:mcb/quark/permafrost_brick_bridge | in=stonezone:mcb/quark/permafrost_brick_bridge | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'stonezone:mcb/quark/permafrost_brick_bridge' })
})
