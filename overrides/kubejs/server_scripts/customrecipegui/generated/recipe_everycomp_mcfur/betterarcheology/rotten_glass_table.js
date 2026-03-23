// [customrecipe] type=Shaped 3x3 | out=everycomp:mcfur/betterarcheology/rotten_glass_table | in=everycomp:mcfur/betterarcheology/rotten_table,betterarcheology:rotten_log,minecraft:glass
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('everycomp:mcfur/betterarcheology/rotten_glass_table', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'everycomp:mcfur/betterarcheology/rotten_table',
      B: 'betterarcheology:rotten_log',
      C: 'minecraft:glass'
    }
  )
})
