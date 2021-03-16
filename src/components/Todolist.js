// eslint-disable-next-line no-unused-vars
import react from "react";

export default function Todolist(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Delete</th>
          </tr>
          {props.alltodos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>{todo.priority}</td>
              <td>
                <button onClick={() => props.delete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
