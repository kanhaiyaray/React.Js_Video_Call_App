import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

const ZegoCloud = () => {
  const [value, setValue] = useState();
  const naviagte = useNavigate()
  const joinRoom = useCallback(() => {

    naviagte(`/room/${value}`);
  },
    [naviagte, value]
  );

  return (
    <>
      <input type='text'
        placeholder="enter room id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={joinRoom}>JOIN</button>
    </>
  )
}

export default ZegoCloud
