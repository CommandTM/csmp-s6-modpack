// [customrecipe] type=Shaped 3x3 | out=everycomp:mcw/northstar/coiler_shutter | in=everycomp:mct/northstar/coiler_tropical_trapdoor
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('everycomp:mcw/northstar/coiler_shutter', 1),
    [
      'A  ',
      'A  ',
      'A  '
    ],
    {
      A: 'everycomp:mct/northstar/coiler_tropical_trapdoor'
    }
  )
})
