// [customrecipe] type=Blasting | out=create:copper_nugget | in=twilightforest:copper_berry
ServerEvents.recipes(event => {
  event.blasting('1x create:copper_nugget', 'twilightforest:copper_berry', 1.0, 100)
})
