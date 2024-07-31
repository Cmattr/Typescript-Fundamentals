import React from 'react';

// Define the user type
interface User {
    name: string;
    age: number;
}

// Define the UserList component
const UserList: React.FC = () => {
    // Predefined array of user objects
    const users: User[] = [
        { name: 'Matt', age: 30 },
        { name: 'Bailey', age: 27 },
    ];

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.name} <br />
                        <strong>Age:</strong> {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
