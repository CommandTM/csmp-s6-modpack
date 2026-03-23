// [customrecipe] type=Remove | out=twilightforest:copper_nugget | heat=output
ServerEvents.recipes(event => {
  event.remove({ output: 'twilightforest:copper_nugget' })
})
