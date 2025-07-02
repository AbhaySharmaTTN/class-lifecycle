// function ProfileCard({ title, picture, caption }) {
//     return (
//         <>
//             <div className="card">
//                 <p>{title}</p>
//                 <img src={picture} alt="alt text" />
//                 <p>{caption}</p>
//             </div>
//         </>
//     );
// }

import React, { Component } from 'react';

class ProfileCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title
        }
    }
    upperCase() {
        this.setState({
            title: this.state.title.toUpperCase()
        })
    }
  render() {
    const { picture, caption } = this.props;
    const {title} = this.state;
    return (
      <div className="card">
        <p>{title}</p>
        <img src={picture} alt="alt text" />
        <p>{caption}</p>
      </div>
    );
  }
}

export default ProfileCard;

