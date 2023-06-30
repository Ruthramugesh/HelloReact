import { useState } from "react"
import FormTable from "./formtable";
import { Searchbtn } from "./searchform";
import { Link } from "react-router-dom";


export function MyForm() {
    //  const data:any = [];
    const [firstname, setFname] = useState("");
    const [lastname, setLname] = useState("");
    const [registerNo, setRegno] = useState("");
    const [Class, setClass] = useState("");
    const [bloodGroup, setBgroup] = useState("");
    const [image, setImage] = useState("");
    const [data, setdata] = useState<any[]>([])

    const handlesubmit = (t: any) => {
        t.preventDefault();
        console.log({ firstname, lastname, registerNo, Class, bloodGroup });
        // const regform = {FirstName,LastName,RegisterNo,Class,BloodGroup};
        const regform = {
            "FirstName": firstname,
            "LastName": lastname,
            "RegNo": registerNo,
            "Class": Class,
            "BloodGroup": bloodGroup,
            "Image": image
        };
        console.log(regform);

        setdata(studentreg => {
            return [...studentreg, regform]
        })

        console.log(data);
        /*  setFname("");
          setLname("");
          setRegno("");
          setClass("");
          setBgroup("");
          data.push(regform);
          console.log(data);*/

    }

    return (
        <>
            <div>
                <head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />

                </head>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundImage: "linear-gradient(100deg,#f26798 0%,#3023ae 100%)" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><Link to="/features">Features</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="title">
                    <nav style={{ backgroundImage: "linear-gradient(100deg,#f26798 0%,#3023ae 100%)" }}>
                        <h1 className="text-center"><i>Registration Form</i></h1>
                    </nav>
                </div>
                <div className="search-control">
                    <form style={{ textAlign: "left" }}>
                        <table style={{ backgroundColor: "#589653", marginLeft: "auto", marginRight: "auto" }}>
                            <tr>
                                <td><label>First Name</label></td>
                                <td><input type="text" value={firstname} id="fname" name="fname" onChange={(t) => setFname(t.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label>Last Name</label></td>
                                <td><input type="text" value={lastname} id="lname" name="lname" onChange={(t) => setLname(t.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label>Reg No</label></td>
                                <td><input type="text" value={registerNo} id="regno" name="regno" onChange={(t) => setRegno(t.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label>Class</label></td>
                                <td><input type="number" value={Class} id="class" name="class" onChange={(t) => setClass(t.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label>Blood Group</label></td>
                                <td>
                                    <select className="form-select" aria-label="Default select example" id="bgroup" value={bloodGroup} name="bgroup" onChange={(t) => setBgroup(t.target.value)}>
                                        <option></option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Select Image</label></td>
                                <td><input type="file" id="img" name="img" value={image} onChange={(t) => setImage(t.target.value)} /></td>
                            </tr>
                            <div>
                                <tr>
                                    <td><input className="btn btn-danger" type="submit" id="submit" value="submit" onClick={handlesubmit} /></td>
                                </tr>
                            </div>
                        </table>
                    </form>
                </div>
                <div className="output">
                    <h1>Output</h1>
                </div>

                <div>
                    <FormTable student={data}></FormTable>
                </div>

            </div>

        </>
    )
}








