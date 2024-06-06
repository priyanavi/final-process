const { Component } =require("react");

const TableHeader =()=>{
   return( <thead>
    <tr>
    <th>name</th>
    <th>age</th>
    </tr>
</thead>)

}

const TableBody= (props)=>{
    const {charactersData}=props;
    const rows=charactersData.map((character,index)=>{
         return(<tr key={index}><td>{character.name}</td><td>{character.age}</td></tr>)
    })
    return(
    <tbody>
        {rows}
    {/* <tr>
        <td>santhiya</td>
        <td>21</td>
    </tr>
    <tr>
        <td>priya</td>
        <td>22</td>
    </tr>
    <tr>
        <td>jenith</td>
        <td>81</td>
    </tr> */}
</tbody>)
  

}

class Table extends Component{
    render(){
        const {charactersData}=this.props;
        return(
            <table>
                <TableHeader/>
                <TableBody charactersData={charactersData}/>
                
            </table>
        )
    }
}
export default Table; 