import "../../../css/Cont.css"
const Section = ({ sub_container, processes }) => {
    return (
        // section begin/////////////////////////////////
        <ul className="">
            <div className="">


            </div>
            <li className="section-items " id="first-item">
                <a className="active" href="#section0">
                    <span className="section_text">{processes.length > 0 ? processes[0].subcontainer_name : ""}</span>
                </a>

            </li>

            {sub_container.slice(1, sub_container.length).map((value, index) =>

                <li key={index} className="section-items  ">
                    <a href={"#section" + (index + 1)} className="inactive">
                        <span className="section_text">{value.subcontainer_name}</span>
                    </a>

                </li>

            )
            }

        </ul>
        //section end
    )
}
export default Section