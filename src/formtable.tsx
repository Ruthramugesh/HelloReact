export default function FormTable(props: any) {
    return (
        <div>
            <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
            </head>
           {/* <div className="table table-dark table-striped-columns">*/ }
            <table style={{marginLeft: "auto", marginRight: "auto"}}>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Roll No</th>
                    <th>Class</th>
                  {/*   <th>Blood Group</th>
                    <th>Image</th>*/}
                </tr>
            

            {
                props.student.map((details: any) => {
                    return (
                        <tr>
                            <td>{details.Firstname}</td>
                            <td>{details.Lastname}</td>
                            <td>{details.Rollno}</td>
                            <td>{details.Class}</td>
                           {/* <td>{details.BloodGroup}</td>
                            <td>{details.Image}</td>*/}
                        </tr>
                    )
                })
            }
            </table>
            </div>
       
    )
}