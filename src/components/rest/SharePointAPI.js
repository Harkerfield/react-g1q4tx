import React, { useState, useEffect, Component, StrictMode } from 'react';

export function SPcreate() {
  var item = {
    Title: 'newItemTitle',
  };

  return fetch(
    _spPageContextInfo.siteAbsoluteUrl +
      "/_api/web/lists/getbytitle('" +
      listName +
      "')/items",
    {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(item),
      headers: {
        Accept: 'application/json; odata=nometadata',
        'Content-Type': 'application/json;odata=nometadata',
        'X-RequestDigest': $('#__REQUESTDIGEST').val(),
      },
    }
  );
}

export function SPread() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const payload = {
      method: 'GET',
      headers: { Accept: 'application/json; odata=verbose' },
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;odata=verbose;charset=utf-8',
      'X-FRAME-OPTIONS': 'SAMEORIGIN',
      //crede1ntials: 'same-origin'    // or credentials: 'include'
      // credentials: 'include'    // or credentials: 'include'
    };
    // fetch(
    //   "https://intelshare.intelink.gov/sites/354RANS/JESTR/_api/web/lists/GetByTitle('Master%20Threat%20List')/items", payload
    // )
    fetch('../threats.json')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

export function SPupdate() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const payload = {
      method: 'GET',
      headers: { Accept: 'application/json; odata=verbose' },
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;odata=verbose;charset=utf-8',
      'X-FRAME-OPTIONS': 'SAMEORIGIN',
      //crede1ntials: 'same-origin'    // or credentials: 'include'
      // credentials: 'include'    // or credentials: 'include'
    };
    // fetch(
    //   "https://intelshare.intelink.gov/sites/354RANS/JESTR/_api/web/lists/GetByTitle('Master%20Threat%20List')/items", payload
    // )
    fetch('../threats.json')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

export function SPdelete() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const payload = {
      method: 'GET',
      headers: { Accept: 'application/json; odata=verbose' },
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;odata=verbose;charset=utf-8',
      'X-FRAME-OPTIONS': 'SAMEORIGIN',
      //crede1ntials: 'same-origin'    // or credentials: 'include'
      // credentials: 'include'    // or credentials: 'include'
    };
    // fetch(
    //   "https://intelshare.intelink.gov/sites/354RANS/JESTR/_api/web/lists/GetByTitle('Master%20Threat%20List')/items", payload
    // )
    fetch('../threats.json')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

// export function SPread() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     const payload = {
//       method: 'GET',
//       headers: { Accept: 'application/json; odata=verbose' },
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json;odata=verbose;charset=utf-8',
//       'X-FRAME-OPTIONS': 'SAMEORIGIN',
//       //crede1ntials: 'same-origin'    // or credentials: 'include'
//       // credentials: 'include'    // or credentials: 'include'
//     };
//     // fetch(
//     //   "https://intelshare.intelink.gov/sites/354RANS/JESTR/_api/web/lists/GetByTitle('Master%20Threat%20List')/items", payload
//     // )
//     fetch('../threats.json')
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }
