import { FETCH_DONE, FETCH_START } from "../action/Action";

const initial_state = {
   users: [],
   event: [],
   artikel: [],
   status: false,
   err: null,
};

function Reducer1(state = initial_state, action) {
   switch (action.type) {
      case FETCH_START:
         return {
            ...state,
            status: true,
         };
      case FETCH_DONE:
         const { users, event, artikel } = action.payload;
         return {
            ...state,
            users: users,
            event: event,
            artikel: artikel,
            status: false,
         };
      default:
         return state;
   }
}

export default Reducer1;
