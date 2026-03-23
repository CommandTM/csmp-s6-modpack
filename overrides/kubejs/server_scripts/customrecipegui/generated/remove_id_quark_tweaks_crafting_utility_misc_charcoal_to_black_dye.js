// [customrecipe] type=Remove | out=minecraft:black_dye | in=quark:tweaks/crafting/utility/misc/charcoal_to_black_dye | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye' })
})
