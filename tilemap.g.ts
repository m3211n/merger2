// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "grid":
            case "level1":return tiles.createTilemap(hex`0a0008000000000000000000000000000302020202030000000002010101010200000000020101010102000000000201010101020000000002010101010200000000030202020203000000000000000000000000`, img`
. . . . . . . . . . 
. . 2 2 2 2 2 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 . . . . 2 . . 
. . 2 2 2 2 2 2 . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.dungeon.floorDark2,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
