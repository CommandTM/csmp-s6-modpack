// [customrecipe] type=Remove | out=supplementaries:flute | in=supplementaries:flute | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'supplementaries:flute' })
})
