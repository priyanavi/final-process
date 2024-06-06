import React from 'react';
// import Parent from './Parent';

function MemoComp({name}) {
    console.log("memo")
  return (
    <div>
      Hii  {name}
    </div>
  )
}

export default React.memo(MemoComp)
