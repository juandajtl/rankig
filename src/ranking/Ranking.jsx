// import React, { useEffect, useState } from 'react';
// import './Ranking.css';

// const Ranking = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('URL_DE_LA_API');
//       const json = await response.json();
//       setData(json);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const calculatePoints = (valoracion) => {
//     // Aquí puedes implementar la lógica para calcular los puntos basados en la valoración
//     // Por ejemplo, si quieres redondear el promedio de la valoración y multiplicarlo por 100:
//     return Math.round(valoracion * 100);
//   };

//   const sortedData = data
//     .sort((a, b) => b.valoracion - a.valoracion)
//     .slice(0, 5);

//   return (
//     <div>
//       <h2>Ranking</h2>
//       <ul className="ranking-list">
//         {sortedData.map((item, index) => (
//           <li key={item.id}>
//             <span className="position">{index + 1}</span>
//             <span className="name">{item.nombre}</span>
//             <span className="points">{calculatePoints(item.valoracion)} puntos</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Ranking;

import React from 'react';
import './Ranking.css';

const Ranking = () => {
  const data = [
    { id: 1, nombre: 'Juan David Lopez Montoya', valoracion: 4.5, foto: '../src/img/descarga - copia.jpg' },
    { id: 2, nombre: 'María', valoracion: 3.8, foto: 'ruta_de_la_foto' },
    { id: 3, nombre: 'Pedro', valoracion: 4.2, foto: 'ruta_de_la_foto' },
    { id: 4, nombre: 'Laura', valoracion: 4.7, foto: 'ruta_de_la_foto' },
    { id: 5, nombre: 'Carlos', valoracion: 3.9, foto: 'ruta_de_la_foto' },
  ];

  const calculatePoints = (valoracion) => {
    return Math.round(valoracion * 100);
  };

  const sortedData = data
    .sort((a, b) => b.valoracion - a.valoracion)
    .slice(0, 5);

  return (
    <div>
      <h2>Ranking</h2>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Nombre</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={item.id} className={index === 0 ? 'first-place' : ''}>
              <td className="position">{index + 1}</td>
              <td className="name">
                {item.nombre}
                <img src={item.foto} alt="Foto de perfil" className="profile-pic" />
              </td>
              <td className="points">{calculatePoints(item.valoracion)} puntos</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
