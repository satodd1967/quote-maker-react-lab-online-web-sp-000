

export default (state = [], action) => {

    switch (action.type) {
      case 'ADD_QUOTE':
        // return [...state, { id: action.quote.id, content: action.quote.content, author: action.quote.author}];
        return [...state, action.quote]
    
      case 'REMOVE_QUOTE':
        return state.filter(quote => quote.id !== action.quoteId);
        // id = state.findIndex(quote => quote.id  === action.id)
        // return [...state.slice(0, id), ...state.slice(id + 1)];

      case 'UPVOTE_QUOTE':
        let downvoteState = state.map(quote => {
          if (quote.id === action.quoteId) {
            return { ...quote, votes: ++quote.votes}
          } else {
            return quote;
          }
        })
        return downvoteState;

      case 'DOWNVOTE_QUOTE':
        let upvoteState = state.map(quote => {
          if (quote.id === action.quoteId && quote.votes !== 0) {
            return { ...quote, votes: --quote.votes}
          } else {
            return quote;
          }
        })
        return upvoteState;
    
      default:
        return state;
  }
}
