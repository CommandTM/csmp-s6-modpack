// [customrecipe] type=Remove | out=minecraft:dispenser | in=terralith:dispenser_alt | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'terralith:dispenser_alt' })
})
