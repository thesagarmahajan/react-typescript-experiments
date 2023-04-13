import { USERS } from '../../mock_model/mock_users';

function StaticDataBinding() {
  
  return (
    <>
    {
      USERS.map(user=>{
        return (<>
          <table border={1}>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{JSON.stringify(user.isActive)}</td>
            </tr>
          </table>
        </>)
      })
    }
    </>
  );
}

export default StaticDataBinding;
