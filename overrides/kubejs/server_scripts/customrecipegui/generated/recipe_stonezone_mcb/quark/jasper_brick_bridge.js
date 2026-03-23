// [customrecipe] type=Shaped 3x3 | out=stonezone:mcb/quark/jasper_brick_bridge x8 | in=mcwquark:jasper_bricks_bridge,minecraft:gravel
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('stonezone:mcb/quark/jasper_brick_bridge', 8),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'mcwquark:jasper_bricks_bridge',
      B: 'minecraft:gravel'
    }
  )
})
