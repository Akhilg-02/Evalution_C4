import { useState } from "react"

export const Google = (pair) =>{

        
            const [state , setState] = useState("");

            const googleSearch = (e) =>{
                //e.preventDefault()
                pair.history.push("/Serch")
            }
        
        
    return(

        // const [ state , ]
        <form action="" onSubmit={googleSearch}>
            <div className="Mybox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw66-0p08vB2KZ3hfEDlGrylvo8xCkCCTPvA&usqp=CAU" alt="https://www.google.com/" />

            <br />
            <br />

            <input type="text" name=""  placeholder="Google Search"
             id="search-box"

             value={state}

             onChange={(e)=>{
                setState(e.target.value)
             }}

            />
        </div>
            <div>
                <input type="Submit" value="Submit" />
            </div>
        </form>
        
        
    );
}