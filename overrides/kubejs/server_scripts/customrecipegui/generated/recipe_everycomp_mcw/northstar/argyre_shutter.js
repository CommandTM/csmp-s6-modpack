// [customrecipe] type=Shaped 3x3 | out=everycomp:mcw/northstar/argyre_shutter | in=everycomp:mct/northstar/argyre_tropical_trapdoor
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('everycomp:mcw/northstar/argyre_shutter', 1),
    [
      'A  ',
      'A  ',
      'A  '
    ],
    {
      A: 'everycomp:mct/northstar/argyre_tropical_trapdoor'
    }
  )
})
