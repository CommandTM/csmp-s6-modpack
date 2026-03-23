// [customrecipe] type=Smelting | out=create:copper_nugget | in=twilightforest:copper_berry
ServerEvents.recipes(event => {
  event.smelting('1x create:copper_nugget', 'twilightforest:copper_berry', 1.0, 200)
})
