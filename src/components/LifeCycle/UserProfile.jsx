import React, { Component } from "react";

// Simulated API function
const mockUserAPI = (userId) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        id: userId,
        name: "Prem Kumar",
        age: 25,
        bio: "Software developer from India",
      });
    }, 2000)
  );

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,         // Coming from props
      userData: null,       // Fetched from "API"
      isLoading: true,
    };
    console.log("Constructor: initialized state");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // Only update userId in state if it's not already set
    if (prevState.userId !== nextProps.userId) {
      console.log("getDerivedStateFromProps: syncing props to state");
      return { userId: nextProps.userId };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount: fetching user data...");
    console.log("state.userId", this.state.userId);
console.log("props.userId", this.props.userId);

    mockUserAPI(this.state.userId).then((data) => {
      this.setState({ userData: data, isLoading: false });
    });
  }

  render() {
    const { isLoading, userData } = this.state;

    console.log("Render: rendering component");

    if (isLoading) {
      return <p>Loading user profile...</p>;
    }

    return (
      <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
        <h2>User Profile</h2>
        <p><strong>ID:</strong> {userData.id}</p>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Bio:</strong> {userData.bio}</p>
      </div>
    );
  }
}

export default UserProfile;
