import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TvIcon from '@mui/icons-material/Tv';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

function Device() {
  const [state, setstate] = useState(false)
  const data=[
    {name:"air condition", image:AcUnitIcon},
    {name:"musice system", image:MusicNoteIcon},
    {name:"light", image:WbIncandescentIcon},
    {name:"television", image:TvIcon}
]
  return (
    <div>
      <div>
        {data.map((item,index)=>(<div key={index}>
          {item.name}
          <img src={item.image} alt="" srcset="" />

        <FormControlLabel control={<Switch defaultChecked  color="default"/>} label="Label" />
        </div>))}

      </div>
    </div>
  )
}

export default Device