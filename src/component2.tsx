import { useState } from "react";
import Component1 from "./component1";
import Component3 from "./component3";
import { Link } from "react-router-dom";

function Component2(props: any) {
    const [arrValue, setarrValue] = useState<any[]>([]);

    const [txtfname, settxtfname] = useState("");
    const [txtlname, settxtlname] = useState("");
    const [students, setstudents] = useState<any[]>([]);


    const firstcall = (e: any) => {

        var stud = {
            firstname: txtfname,
            lastname: txtlname
        };
        setstudents(student => {
            return [...student, stud]
        }
        )

        // setarrValue(a => {
        //     return [...a, 'a']
        // });
        console.log(students);
        settxtfname("");
        settxtlname("");
    }

    return (
        <div>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />

            </head>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><Link to="/">Home</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><Link to="/form">Form</Link></a>
                        </li>
                        </ul>
                        </div>
            </nav>
            <h1>{props.header}</h1>
            {arrValue.length}
            <div>FirstName: <input type="text" value={txtfname} onChange={(e) => settxtfname(e.target.value)} /></div>
            <div>LastName: <input type="text" value={txtlname} onChange={(e) => settxtlname(e.target.value)} /></div>
            <input type="button" value="Add Student" onClick={(e) => { firstcall(e) }} />
            <br />
            {students.length}
            <Component3 items={students}></Component3>
            <Component1 value={arrValue.length}></Component1>
          
        </div>
    )
}

export default Component2;


