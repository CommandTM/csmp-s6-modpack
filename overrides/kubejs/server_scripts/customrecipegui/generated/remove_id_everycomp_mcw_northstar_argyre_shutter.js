// [customrecipe] type=Remove | out=everycomp:mcw/northstar/argyre_shutter | in=everycomp:mcw/northstar/argyre_shutter | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'everycomp:mcw/northstar/argyre_shutter' })
})
