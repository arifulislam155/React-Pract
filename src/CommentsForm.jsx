import { useState } from "react"

export default function CommentsForm(){
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    })

    let handleInpurChange =(event)=>{
        setFormData((curreData)=>{
            return{...curreData, [event.target.name]: event.target.value};
        })
    }

    let handleSubmit = ()=> {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })

    }
    return(
        <div>
            <h1>Give a Comment</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInpurChange} name="username"/>
                <br />
                <br />
                <label htmlFor="Remarks">Remarks</label>
                <textarea placeholder="add few remarks" value={formData.remarks} onChange={handleInpurChange} name="remarks">Remarks</textarea>
                <br />
                <br />
                <label htmlFor="Rating">Rating</label>
                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInpurChange} name="rating"/>
                <br />
                <br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}