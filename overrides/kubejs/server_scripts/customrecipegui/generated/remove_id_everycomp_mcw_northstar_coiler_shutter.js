// [customrecipe] type=Remove | out=everycomp:mcw/northstar/coiler_shutter | in=everycomp:mcw/northstar/coiler_shutter | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'everycomp:mcw/northstar/coiler_shutter' })
})
