import React from "react";

const Index = ({ loginUser }) => {
    // Retrieve username from loginUser object
    const { username } = loginUser;

    return (
        <div>
            {/* Display the user's name */}
            <h1>Welcome, {username}!</h1>
            {/* Include your index.html content here */}
        </div>
    );
};

export default Index;