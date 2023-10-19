import { configureStore } from "@reduxjs/toolkit";

import helloReducer from "./a4/ReduxExamples/HelloRedux/helloReducer";
import counter1Reducer from "./a4/ReduxExamples/counter1Reducer";
import counter2Reducer from "./a4/ReduxExamples/counter2Reducer";
import addReducer from "./a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "./a4/ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    todosReducer,
    helloReducer,
    counter1Reducer,
    counter2Reducer,
    addReducer,
  },
});

export default store;
