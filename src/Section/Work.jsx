export const Work = ({triangles}) => {
    return (
        <div className={triangles[1] ? "section--work blue" : "section--work red"}>
            <div className="section--header">
                <h2>Work</h2>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur voluptate laborum culpa in dolorum itaque veritatis reprehenderit porro recusandae accusantium excepturi cumque, illum deserunt.</p>
            </div>
            <div className="section--work__image--container">
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic01.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic02.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic03.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic04.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic05.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic06.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic07.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic08.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic09.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic10.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic11.jpg')} alt=""></img>
                </div>
                <div>
                    <img  className="section--work__image--item" src={require('../images/pic12.jpg')} alt=""></img>
                </div>            
            </div>
        </div>
    )
}