import '../src/App.css'

function MainContent(){
    return(
        <div className="main">
            <div className="leftbox">
                <h1>your feet deserve the best</h1>
                <div className="ptbn">
                    <p>your feet deserve the best and we're here to help you with our shoes.your feet deserve the best and we're here to help you with our shoes.</p>
                    <div className="btns">
                        <button id='btn1'>Shop Now</button>
                        <button id='btn2'>Category</button>
                    </div>
                </div>
                <div className="sellers">
                    <p>Also Available On:</p>
                    <img src="/images/flipkart.png" alt="logo"  style={{height:"50px"}}/>
                    <img src="/images/amazon.png" alt="logo"  style={{height:"50px"}}/>
                </div>

            </div>
            <div className="rightbox">
                <img src="/images/heroimg.png" alt="Main hero image" />
            </div>
        </div>
    )
}


export default MainContent