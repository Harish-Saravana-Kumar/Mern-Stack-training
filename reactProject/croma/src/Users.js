import { useSelector } from "react-redux";

export default function Users() {
    const users = useSelector((state) => state.userInfo.eusers);
    console.log('The users: ', users);

    return (
        <>
            <h1>I'm in the User page</h1>
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h1>{user.name}</h1>
                            <h1>{user.rollno}</h1>
                            <h1>{user.batch}</h1>
                        </div>
                    );
                })
            }
        </>
    );
}
