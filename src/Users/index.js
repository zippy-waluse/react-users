// import { useGetUsers } from "./hooks/useGetUsers";
import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";

const Users = ()=>{

    const {users,error,loading} = useGetUsers();
    console.log({users});


    return(
        <div>
           {loading && <h2>Loading users ...</h2>}
           {error.length>0 && <h2> {error}</h2>}
           {users.length > 0? users.map((users)=>(
           <UserCard
            key={users.id}
            image={users.image}
            fullName={`${users.firstName} ${users.lastName}`}
            />

           )):!loading && <h2>No users found</h2>
        };
        </div>
    );
};

export default Users;