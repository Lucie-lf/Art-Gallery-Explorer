import { getDepartments } from '../api/departements.jsx';
import { useEffect, useState } from 'react';

function Header() {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        async function fetchDepartments() {
            const data = await getDepartments();
            if (data?.departments) {
                setDepartments(data.departments);
            }
        }
        fetchDepartments();
    }, []);

  return (
    <header className="flex flex-row bg-stone-500 gap-4 text-white p-4">
      <h1 className="text-3xl font-bold">Art Gallery Explorer</h1>
      <input type="text" placeholder="Search for art pieces..." className="p-2 rounded bg-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <select className="p-2 rounded bg-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
        {departments.map((dept) => (
          <option key={dept.departmentId} value={dept.departmentId}>
            {dept.displayName}
          </option>
        ))}
      </select>
      <button className="ml-auto bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
        Favorite pieces
        </button>
    </header>
  );
}

export default Header;