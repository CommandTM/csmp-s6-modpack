// [customrecipe] type=Remove | out=everycomp:tf/twilightforest/mangrove_banister | in=everycomp:tf/twilightforest/mangrove_banister | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'everycomp:tf/twilightforest/mangrove_banister' })
})
