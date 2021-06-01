import { useEffect } from "react";
import { useState } from "react";
import '../../../css/SessionTimeoutDialog.css'
const SessionTimeoutDialog = ({ time }) => {
    let [chrono, setChrono] = useState(time)

    let chronoUpdate = () => {
        setTimeout(() => {
            setChrono(chrono - 1)
            if (chrono <= 1)
                setChrono(20)

        }, 500)
    }
    useEffect(() => {
        chronoUpdate()
    })
    return (
        <div className="session-container">
            <p>{chrono}</p>
        </div>
    )
}
export default SessionTimeoutDialog;