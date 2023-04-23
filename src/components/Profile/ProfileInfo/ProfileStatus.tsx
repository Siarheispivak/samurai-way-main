import React from 'react';

type StateType = {
    editMode: boolean
    title:string
}
type PropsType = {
    status:string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
    state:StateType = {
        editMode: false,
        title:'Yo'
    }
    activateEditMode(){
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode(){
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }


            </>
        );
    }
};

export default ProfileStatus;