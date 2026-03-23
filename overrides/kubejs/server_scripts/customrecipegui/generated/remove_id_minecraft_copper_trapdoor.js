// [customrecipe] type=Remove | out=minecraft:copper_trapdoor | in=minecraft:copper_trapdoor | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'minecraft:copper_trapdoor' })
})
