// [customrecipe] type=Remove | out=mcwquark:railing_red_sandstone_bricks_wall | in=mcwquark:railing_red_sandstone_bricks_wall | heat=id
ServerEvents.recipes(event => {
  event.remove({ id: 'mcwquark:railing_red_sandstone_bricks_wall' })
})
