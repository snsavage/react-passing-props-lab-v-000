import React from 'react';

export default function FilteredFruitList (props) {
  const list = !props.filter ? props.fruit :
    props.fruit.filter(i => i.fruit_type == props.filter);

  return (
    <ul className="fruit-list">
      {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  filter: "",
  fruit: []
}
