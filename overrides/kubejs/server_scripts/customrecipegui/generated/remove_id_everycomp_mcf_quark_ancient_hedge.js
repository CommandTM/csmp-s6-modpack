// [customrecipe] type=Remove | out=everycomp:mcf/quark/ancient_hedge | in=everycomp:mcf/quark/ancient_hedge | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'everycomp:mcf/quark/ancient_hedge' })
})
