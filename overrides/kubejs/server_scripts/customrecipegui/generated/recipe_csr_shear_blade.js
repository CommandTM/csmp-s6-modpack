// [customrecipe] type=Shapeless 3x3 | out=csr:shear_blade | in=minecraft:shears
ServerEvents.recipes(event => {
  event.shapeless('1x csr:shear_blade', [
    'minecraft:shears'
  ])
})
