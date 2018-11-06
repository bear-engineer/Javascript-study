import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
    state = {
        editing:false,
        name:'',
        phone:'',
    }
    handleRemove = () =>{
        const {info, onRemove} = this.props;
        onRemove(info.id)
    }
    handleToggle = () =>{
        const {info, onUpdate} = this.props;
        if (this.state.editing) {
            onUpdate(info.id, {
                name:this.state.name,
                phone:this.state.phone,
            });
        }else{
            this.setState({
                name:info.name,
                phone:info.phone
            });
        }
        this.setState({
            editing:!this.state.editing,
        })
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, phone} = this.props.info;
        const {editing} = this.state;
        const style = {
            border:'1px solid black',
            padding:'8px',
            margin:'8px',
        }
        return (

            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input name='name' value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div>
                                <input name='phone' value={this.state.phone} onChange={this.handleChange} />
                            </div>
                        </Fragment>

                    ):(
                        <Fragment>
                        <div>
                            <b>{name}</b>
                        </div>
                        <div>
                            <b>{phone}</b>
                        </div>
                        </Fragment>
                    )
                }
                <div>

                    <button onClick={this.handleRemove}>삭제</button>

                    <button onClick={this.handleToggle}>
                    { editing ? '적용':'수정'}
                    </button>
                </div>
            </div>
            
        );
    }
}

export default PhoneInfo;