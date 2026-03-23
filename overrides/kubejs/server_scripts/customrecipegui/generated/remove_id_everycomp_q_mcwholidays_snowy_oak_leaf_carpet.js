// [customrecipe] type=Remove | out=everycomp:q/mcwholidays/snowy_oak_leaf_carpet | in=everycomp:q/mcwholidays/snowy_oak_leaf_carpet | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'everycomp:q/mcwholidays/snowy_oak_leaf_carpet' })
})
