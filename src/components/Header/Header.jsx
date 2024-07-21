import React from 'react';
import Button from "../Buttons/Button";
import {useTg} from "../../hooks/useTg";

const Header = () => {
    const {user, onClose} = useTg()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span>className={'username'}
                {user?.username}
            </span>
        </div>

    )
}