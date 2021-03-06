import * as React from 'react';
import './usernav.scss';
import { connect } from 'react-redux';

import { Chat } from '../';

const messageLogo = require('../../assets/img/sprite.svg');

export class UsernavComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: 5,
            covers: 4
        };
    }

    render() {
        const name = this.props.user.name;
        return (
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={messageLogo + "#icon-bubble"}/>
                    </svg>
                    <span className="user-nav__notification">{this.state.messages}</span>
                    <Chat />
                </div>
                <div className="user-nav__icon-box">               
                    <svg className="user-nav__icon">
                        <use xlinkHref={messageLogo + "#icon-headphones"}/>
                    </svg> 
                    <span className="user-nav__notification">{this.state.covers}</span>
                </div>
                <div className="user-nav__icon-box user-nav__user">
                    <div className="user-nav__icon--circle-border">
                        <svg className="user-nav__icon">
                            <use xlinkHref={messageLogo + "#icon-user"}/>
                        </svg>
                    </div>                     
                    <span className="user-nav__user-nick">{name}</span>
                </div>
            </nav>
        );
    }
}

const mapToStateProps = (state) => {
    let user = state.verifyUser.user;
    return {
        user
    };
}

export const Usernav = connect(mapToStateProps)(UsernavComponent);