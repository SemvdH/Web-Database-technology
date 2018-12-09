(function (exports) {
    // client to server: game is complete, winner is...
    exports.T_GAME_WON_BY =  "GAME-WON-BY";             
    exports.O_GAME_WON_BY = {
        type: exports.T_GAME_WON_BY,
        data: null
    };

    //server to client: abort game (if second player exited)
    exports.O_GAME_ABORTED = {                          
        type: "GAME-ABORTED"
    };
    exports.S_GAME_ABORTED = JSON.stringify(exports.O_GAME_ABORTED);

    // //server to client: place ships
    // exports.O_PLACE = { type: "PLACE-SHIPS"};

    //player A or B to server: i want to place my shot on this cell
    exports.T_TARGET_CELL = "SET-TARGET-CELL";
    exports.O_TARGET_CELL = {
        type: exports.T_TARGET_CELL,
        data: "CELL"
    };

    // server to player A or B: shot hit
    exports.T_TARGET_HIT = "TARGET-HIT";
    exports.O_TARGET_HIT = {
        type: exports.T_TARGET_HIT,
        data: null  //"CELL" ?
    };

    // server to player A or B: shot miss
    exports.T_TARGET_MISS = "TARGET-MISS";
    exports.O_TARGET_MISS = {
        type: exports.T_TARGET_MISS,
        data: null  //"CELL" ?
    };

    //server to player A or B: player ... destroyed one of your ships
    exports.T_SHIP_DESTROYED = "SHIP-DESTROYED";
    exports.O_SHIP_DESTROYED = {
        type: exports.T_SHIP_DESTROYED,
        data: null
    }

    //server to both players: game over with result won/loss
    exports.T_GAME_OVER = "GAME-OVER";              
    exports.O_GAME_OVER = {
        type: exports.T_GAME_OVER,
        data: null
    };
    
}(typeof exports === "undefined" ? this.Messages = {} : exports));
// if exports is undefined, we're on the client, else the server