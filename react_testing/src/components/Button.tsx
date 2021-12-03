import React, { FC } from 'react'

const Button:FC = () => {
    const [showAnotherButton,setShowAnotherbutton]=React.useState<boolean>(false)
    return (
        <div>
            <button data-testid="button" onClick={
                ()=>{
                    setShowAnotherbutton(true)
                }
            }>Click HEREEEEE</button>
            {showAnotherButton && (
                <button data-testid="button">Click HEREEEE</button>
            )}
        </div>
    )
}

export default Button;
