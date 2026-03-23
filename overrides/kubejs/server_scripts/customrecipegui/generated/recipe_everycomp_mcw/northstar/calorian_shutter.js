// [customrecipe] type=Shaped 3x3 | out=everycomp:mcw/northstar/calorian_shutter | in=everycomp:mct/northstar/calorian_tropical_trapdoor
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('everycomp:mcw/northstar/calorian_shutter', 1),
    [
      'A  ',
      'A  ',
      'A  '
    ],
    {
      A: 'everycomp:mct/northstar/calorian_tropical_trapdoor'
    }
  )
})
