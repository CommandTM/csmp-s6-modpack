// [customrecipe] type=Shaped 3x3 | out=mcwquark:railing_red_sandstone_bricks_wall x6 | in=quark:red_sandstone_bricks,minecraft:iron_bars
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mcwquark:railing_red_sandstone_bricks_wall', 6),
    [
      'ABA',
      'AAA',
      '   '
    ],
    {
      A: 'quark:red_sandstone_bricks',
      B: 'minecraft:iron_bars'
    }
  )
})
