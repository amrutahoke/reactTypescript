export interface IStoreState {
    todoList: any[],
    todoWorkingCopy: any
}
const initialState: IStoreState = {
    todoList: [],
    todoWorkingCopy: {
        title: ""
    }
};

export const withoutImmerReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "FIELD_CHANGED":
            return {
                ...state,
                todoWorkingCopy: {
                    ...state.todoWorkingCopy,
                    title: payload
                }
            }
        case "ADD_DATA":
            return {
                ...state,
                todoList: state.todoList.concat(state.todoWorkingCopy)
            }
        default:
            return;
    }
};