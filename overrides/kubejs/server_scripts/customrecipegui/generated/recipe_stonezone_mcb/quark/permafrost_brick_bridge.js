// [customrecipe] type=Shaped 3x3 | out=stonezone:mcb/quark/permafrost_brick_bridge x8 | in=mcwquark:permafrost_bricks_bridge,minecraft:gravel
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('stonezone:mcb/quark/permafrost_brick_bridge', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'mcwquark:permafrost_bricks_bridge',
      B: 'minecraft:gravel'
    }
  )
})
