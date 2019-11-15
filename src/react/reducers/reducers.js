export default (state = null, action) => {

    if (state === null) {
      state = {
          playerNumber: 11,
          playerName: 'Costa'
      };
    }
    switch(action.type){
        case 'changeTo10' : {
            
                return{
                    ...state,
                    playerNumber: 10,
                    playerName: action.playerName
            }
        }
        case 'changeTo7' : {
            
            return{
                ...state,
                playerNumber: 7,
                playerName: action.playerName
        }
    }
        default: break;
    }

    return state;
};