// [customrecipe] type=Remove | out=everycomp:mcf/quark/orange_blossom_hedge | in=everycomp:mcf/quark/orange_blossom_hedge | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'everycomp:mcf/quark/orange_blossom_hedge' })
})
