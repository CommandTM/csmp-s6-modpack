// [customrecipe] type=Shaped 3x3 | out=everycomp:mcfur/northstar/calorian_glass_table | in=everycomp:mcfur/northstar/calorian_table,northstar:calorian_log,minecraft:glass
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('everycomp:mcfur/northstar/calorian_glass_table', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'everycomp:mcfur/northstar/calorian_table',
      B: 'northstar:calorian_log',
      C: 'minecraft:glass'
    }
  )
})
