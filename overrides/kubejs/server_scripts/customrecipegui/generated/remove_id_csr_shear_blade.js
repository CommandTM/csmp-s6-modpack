// [customrecipe] type=Remove | out=csr:shear_blade | in=csr:shear_blade | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'csr:shear_blade' })
})
