ServerEvents.recipes(event => {
  event.recipes.farmersdelight.cooking(
        "misc", // recipe book tab - valid values: meals, drinks, misc
        ["oaksdelight:cheese"],
        "oaksdelight:butter", // output
        1, // exp
        10, // cookTime
        "minecraft:paper" // container
    )
})
