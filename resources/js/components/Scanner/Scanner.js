import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Contrast from "../Contrast/Contrast"
import Menu from "../NavBar/Menu"
import NavBar from "../NavBar/NavBar"

const Scanner = () => {

    return (

        <div>
            <div>
                <div id="side">
                    <Menu></Menu>
                    <Contrast></Contrast>
                </div>

            </div>
            <div id="contain" className='contain-home'>
                <NavBar></NavBar>
                <div className="bread-text">
                    <Breadcrumbs></Breadcrumbs>
                </div>
                <div className="scanner-container">

                    <h2>Scanner</h2>


                </div>
            </div>
        </div>
    )
}
export default Scanner