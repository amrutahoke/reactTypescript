import * as React from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index';
import {IStoreState} from '../reducers/withoutImmer';

interface IStore {
    store: IStoreState
}

type IAppProps = IStore & typeof actions;

class App extends React.Component<IAppProps> {
    render() {
        const { addData, fieldChanged, store } = this.props;
        const { todoWorkingCopy, todoList } = store;
        return (
            <div>
                <h2>Add todo title</h2>
                <input
                    onChange={(e) => fieldChanged(e.target.value)}
                    value={todoWorkingCopy && todoWorkingCopy.title}
                />
                <button onClick={() => addData()}>
                    Add Task
                </button>
                <h2>Added tasks</h2>
                <ul>
                    {
                        todoList && todoList.map(item => <li>{item.title}</li>)
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({store: {...state}})

export default connect(mapStateToProps, { ...actions })(App);