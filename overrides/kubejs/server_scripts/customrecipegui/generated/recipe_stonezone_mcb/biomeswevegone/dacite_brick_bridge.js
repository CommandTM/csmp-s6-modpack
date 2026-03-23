// [customrecipe] type=Shaped 3x3 | out=stonezone:mcb/biomeswevegone/dacite_brick_bridge x8 | in=mcwbyg:dacite_bricks_bridge,minecraft:gravel
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('stonezone:mcb/biomeswevegone/dacite_brick_bridge', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'mcwbyg:dacite_bricks_bridge',
      B: 'minecraft:gravel'
    }
  )
})
