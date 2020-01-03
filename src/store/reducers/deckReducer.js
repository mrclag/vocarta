const initState = {
  authError: null
};

const deckReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      console.log('Added deck', action.deck);
      return state;
    case 'ADD_DECK_ERROR':
      console.log('add deck error', action.err);
      return state;
    case 'SET_CURRENT_DECK':
      console.log(action.deckName);
      return {
        ...state,
        currentDeck: action.deckName
      };
    default:
      return state;
  }
};

export default deckReducer;