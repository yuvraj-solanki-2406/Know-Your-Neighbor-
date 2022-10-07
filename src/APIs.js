import { useState, useEffect } from "react";
v   

export function GithubDetails({name, image}) {
    return(
        <div>
            <span>{name}</span>
            <img src={image} alt="image"></img>
        </div>
    )
}

function APIs(){
    
    const[data, setData] = useState(null);
    
    useEffect(() =>{
        fetch(
            `https://api.github.com/users/yuvraj-solanki-2406`
        )
        .then((res) => res.json())
        .then(setData);
    }, []);
    if(data)
        return (
            
            // <div>
            //     <hr></hr>
            //     <p>This is a next component</p> 
            //     <pre>{JSON.stringify(data,null,1)}</pre>                
            // </div>
            <div>
                <nav>
                    <Link to="/cb">APIs</Link>
                </nav>
                <GithubDetails
                    name = {data.login}
                    image = {data.avatar_url}
                />
            </div>
        );
}


export default APIs
