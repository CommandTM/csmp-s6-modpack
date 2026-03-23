// [customrecipe] type=Remove | out=everycomp:mcfur/northstar/calorian_glass_table | heat=output
ServerEvents.recipes(event => {
  event.remove({ output: 'everycomp:mcfur/northstar/calorian_glass_table' })
})
