function Table(props){
    return (
        <table>
            <thead>
               <tr>
                   <td>Name</td>
                   <td>Profession</td>
                   <td>Delete</td>
               </tr> 
            </thead>
            <tbody>
              {props.td.map((emp, index)=>
                  <tr key={index}>
                      <td>{emp.name}</td>
                      <td>{emp.profession}</td>
                      <td><button onClick={()=>props.handleDeleteOnClick(index)}>Delete</button></td>
                  </tr>
              )}
            </tbody>
        </table>
    )
}
    


export default Table;