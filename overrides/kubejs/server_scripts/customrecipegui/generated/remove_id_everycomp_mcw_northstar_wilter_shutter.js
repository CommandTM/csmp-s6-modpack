// [customrecipe] type=Remove | out=everycomp:mcw/northstar/wilter_shutter | in=everycomp:mcw/northstar/wilter_shutter | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'everycomp:mcw/northstar/wilter_shutter' })
})
