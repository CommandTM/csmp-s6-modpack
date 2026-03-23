// [customrecipe] type=Remove | out=farmersdelight:hanging_canvas_sign | in=aethersdelight:hanging_canvas_sign_from_skyroot | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'aethersdelight:hanging_canvas_sign_from_skyroot' })
})
