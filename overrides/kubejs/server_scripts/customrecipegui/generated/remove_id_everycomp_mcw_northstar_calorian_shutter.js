// [customrecipe] type=Remove | out=everycomp:mcw/northstar/calorian_shutter | in=everycomp:mcw/northstar/calorian_shutter | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'everycomp:mcw/northstar/calorian_shutter' })
})
