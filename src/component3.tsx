export default function Component3(props: any) {
    return (<>
 
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
             
                {

                    props.items.map((item: any) => {
                        return(

                        <tr>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                        </tr>
                        )

                    }
                    )
                }


            </tbody>

        </table>
        </>
    )
}