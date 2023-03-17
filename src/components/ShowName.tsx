import { useStore } from '@nanostores/react';
import { name } from '../noteStore';

export const ShowName = () => {
    const userName = useStore(name);
    return (<div>
        My name is {userName}
    </div>)
}