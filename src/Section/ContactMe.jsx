export const ContactMe = ({triangles}) => {
     return (
        <div className={triangles[2] ? "section--contact blue" : "section--contact red"}>
            <div className="section--header">
                <h2>Contact Me</h2>
            </div>
            <form className="section--contact--form">
                <div className="section--contact--form--item1">
                    <input type="text" name="name" placeholder="Name"></input>
                </div>
                <div className="section--contact--form--item1">
                    <input type="text" name="email" placeholder="Email"></input>
                </div>
                <div className="section--contact--form--item2">
                    <input type="text" name="subject" placeholder="Subject"></input>
                </div>
                <div className="section--contact--form--item2">
                    <textarea name="" placeholder="Message" rows={6}></textarea>
                </div>
                <div className="section--contact--form--button">
                    <button type="submit" onClick={(event)=>{event.preventDefault()}}>Send Message</button>
                </div>
            </form>
        </div>
     )
}