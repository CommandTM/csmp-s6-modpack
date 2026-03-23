// [customrecipe] type=Remove | out=everycomp:mcf/quark/lavender_blossom_hedge | in=everycomp:mcf/quark/lavender_blossom_hedge | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'everycomp:mcf/quark/lavender_blossom_hedge' })
})
