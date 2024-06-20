const UserCard = ({image,fullName,age,gender}) =>{
    return(
        <div>
            <img src={image} alt={`${fullName} profile`}/>
            <img/>
            <h2>{fullName}</h2>
            <h2>{age}</h2>
            <h2>{gender}</h2>
          
              
        </div>
    );
};

export default UserCard;