sprites.onCreated(SpriteKind.Player, function (sprite) {

    let freeLocations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    if (numbersTiles.length > 0) {
        for (let value of numbersTiles) {
            let c1 = value.tilemapLocation().column - c0
            let r1 = value.tilemapLocation().row - r0
            let occupiedLocation = r1 * 4 + c1
            freeLocations.removeAt(occupiedLocation)
        }
    }
    
    let randomLocation = freeLocations._pickRandom()
    tiles.placeOnTile(sprite, tiles.getTileLocation(randomLocation % 4 + c0, Math.floor(randomLocation / 4) + r0))

})

let numbersTiles: Sprite[] = []

let c0 = 3
let r0 = 2

info.setScore(0)

scene.setBackgroundImage(assets.image`game_bg`)
scene.centerCameraAt(80, 64)
tiles.setCurrentTilemap(tilemap`grid`)

numbersTiles.push(sprites.create(assets.image`tile_0`, SpriteKind.Player))
numbersTiles.push(sprites.create(assets.image`tile_0`, SpriteKind.Player))
