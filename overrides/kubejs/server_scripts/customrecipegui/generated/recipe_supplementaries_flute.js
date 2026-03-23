// [customrecipe] type=Shaped 3x3 | out=supplementaries:flute | in=minecraft:bamboo
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('supplementaries:flute', 1),
    [
      '   ',
      'AAA',
      '   '
    ],
    {
      A: 'minecraft:bamboo'
    }
  )
})
