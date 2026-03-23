// [customrecipe] type=Shaped 3x3 | out=everycomp:mcfur/dungeonsdelight/wormwood_glass_table | in=everycomp:mcfur/dungeonsdelight/wormwood_table,dungeonsdelight:wormroots_block,minecraft:glass
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('everycomp:mcfur/dungeonsdelight/wormwood_glass_table', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'everycomp:mcfur/dungeonsdelight/wormwood_table',
      B: 'dungeonsdelight:wormroots_block',
      C: 'minecraft:glass'
    }
  )
})
