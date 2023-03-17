import {useState} from 'react'
import { setName } from '../store/nameStore';

export const ChangeName = () => {

    const [name, updateName] = useState<string>('');

    const onSet = () => {
        setName(name);
        updateName("");
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <label htmlFor="">Change name</label>
            <input type="text" onChange={e => updateName(e.target.value)} value={name}/>
            <button onClick={onSet}>Update name</button>
        </div>
    )

}