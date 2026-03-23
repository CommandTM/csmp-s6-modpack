// [customrecipe] type=Shaped 3x3 | out=minecraft:copper_trapdoor | in=minecraft:copper_ingot
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:copper_trapdoor', 1),
    [
      '   ',
      'AA ',
      'AA '
    ],
    {
      A: 'minecraft:copper_ingot'
    }
  )
})
