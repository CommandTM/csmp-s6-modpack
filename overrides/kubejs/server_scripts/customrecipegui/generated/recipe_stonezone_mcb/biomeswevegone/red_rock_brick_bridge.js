// [customrecipe] type=Shaped 3x3 | out=stonezone:mcb/biomeswevegone/red_rock_brick_bridge x8 | in=mcwbyg:red_rock_bricks_bridge,minecraft:gravel
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('stonezone:mcb/biomeswevegone/red_rock_brick_bridge', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'mcwbyg:red_rock_bricks_bridge',
      B: 'minecraft:gravel'
    }
  )
})
