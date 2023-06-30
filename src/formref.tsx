import { useRef, useState } from "react"
import FormTable from "./formtable";
import { Link } from "react-router-dom";

export default function FormRef() {
    const values: any = [];
    const fname = useRef<any>(null);
    const lname = useRef<any>(null);
    const rollno = useRef<any>(null);
    const Classs = useRef<any>(null);
    // const items = useRef<any>([])
    //  const [item, setitem] = useState<any>([])

    const submitbtn = (q: any) => {
        const FName = fname.current.value;
        const LName = lname.current.value;
        const RollNo = rollno.current.value;
        const cls = Classs.current.value;

        var result = {
            "Firstname": FName,
            "Lastname": LName,
            "Rollno": RollNo,
            "Class": cls
        }
        console.log(result);
        values.push(result);
        console.log(values);
        /* setitem{(data: any) => {
          return [...data, result]
         }}*/

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
                        <li>
                            <a className="nav-link active" aria-current="page"><Link to="/about">About</Link></a>
                        </li>
                        <li>
                            <a className="nav-link active" aria-current="page"><Link to="/feature">Features</Link></a>
                        </li>
                    </ul>
                </div>

            </nav>
            <h1>Registration</h1>
            <table>
                <tr>
                    <td><label>First Name</label></td>
                    <td><input type="text" ref={fname} ></input></td>
                </tr>
                <tr>
                    <td><label>Last Name</label></td>
                    <td><input type="text" ref={lname} ></input></td>
                </tr>
                <tr>
                    <td><label>Roll No</label></td>
                    <td><input type="text" ref={rollno} ></input></td>
                </tr>
                <tr>
                    <td><label>Class</label></td>
                    <td><input type="number" ref={Classs}></input></td>
                </tr>
                <tr>
                    <td><input type="submit" onClick={submitbtn}></input></td>
                </tr>
            </table>
            <h1>Result</h1>
            <FormTable student={values}></FormTable>
        </div>
    )
}