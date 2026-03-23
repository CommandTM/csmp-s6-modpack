// [customrecipe] type=Shaped 3x3 | out=everycomp:mcfur/mynethersdelight/powdery_glass_table | in=everycomp:mcfur/mynethersdelight/powdery_table,mynethersdelight:powdery_block,minecraft:glass
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('everycomp:mcfur/mynethersdelight/powdery_glass_table', 1),
    [
      ' A ',
      ' B ',
      ' C '
    ],
    {
      A: 'everycomp:mcfur/mynethersdelight/powdery_table',
      B: 'mynethersdelight:powdery_block',
      C: 'minecraft:glass'
    }
  )
})
