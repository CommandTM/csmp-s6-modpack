// [customrecipe] type=Shaped 3x3 | out=stonezone:mcb/quark/soul_sandstone_brick_bridge x8 | in=mcwquark:soul_sandstone_bricks_bridge,minecraft:gravel
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('stonezone:mcb/quark/soul_sandstone_brick_bridge', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'mcwquark:soul_sandstone_bricks_bridge',
      B: 'minecraft:gravel'
    }
  )
})
