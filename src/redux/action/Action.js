import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_DONE = "FETCH_DONE";
export const GET_DATA = "GET_DATA";
export const POST_EVENT = "POST_EVENT";
export const POST_USER = "POST_USER";
export const REGIS_EVENT = "REGIS_EVENT";

export function fetchStart() {
   return {
      type: FETCH_START,
   };
}
export function fetchDone(users, event, artikel) {
   return {
      type: FETCH_DONE,
      payload: {
         users,
         event,
         artikel,
      },
   };
}

export function getData() {
   return async (dispatch) => {
      dispatch(fetchStart());
      const userList = await axios.get(
         "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/users"
      );
      const eventList = await axios.get(
         "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event"
      );
      const articleList = await axios.get(
         "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/artikel"
      );

      dispatch(fetchDone(userList.data, eventList.data, articleList.data));
   };
}

export function postEvent(data) {
   return async () => {
      axios.post(
         "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event",
         data
      );
   };
}

export function postUser(data) {
   return async () => {
      axios.post(
         "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/users",
         data
      );
   };
}
export function regisEvent(datax, id) {
   return async () => {
      const data = await axios.get(
         `https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event/${id}`
      );
      console.log(data.data.personRegis);
      axios.put(
         `https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/event/${id}`,
         { personRegis: data.data.personRegis + 1 }
      );
      axios.post(
         "https://634c991cf5d2cc648e90dc64.mockapi.io/gre/1/paticipant",
         datax
      );
   };
}
