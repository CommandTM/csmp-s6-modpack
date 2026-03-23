// [customrecipe] type=Remove | out=everycomp:mcfur/dungeonsdelight/wormwood_glass_table | heat=output
ServerEvents.recipes(event => {
  event.remove({ output: 'everycomp:mcfur/dungeonsdelight/wormwood_glass_table' })
})
