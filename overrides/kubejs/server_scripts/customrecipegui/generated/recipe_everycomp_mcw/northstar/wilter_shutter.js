// [customrecipe] type=Shaped 3x3 | out=everycomp:mcw/northstar/wilter_shutter | in=everycomp:mct/northstar/wilter_tropical_trapdoor
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('everycomp:mcw/northstar/wilter_shutter', 1),
    [
      'A  ',
      'A  ',
      'A  '
    ],
    {
      A: 'everycomp:mct/northstar/wilter_tropical_trapdoor'
    }
  )
})
