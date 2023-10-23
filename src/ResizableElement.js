import React, { useState } from 'react';

const ResizableElement = () => {
    const [width, setWidth] = useState(200);
    const [showButton, setShowButton] = useState(false);

    const handleDrag = e => {
        const newWidth = e.clientX;
        if (newWidth <= 80) {
            setWidth(0);
            setShowButton(true);
        } else {
            setWidth(newWidth);
            setShowButton(false);
        }
    };

    const handleDragEnd = () => {
        window.removeEventListener('mousemove', handleDrag);
        window.removeEventListener('mouseup', handleDragEnd);
    };

    const handleMouseDown = () => {
        window.addEventListener('mousemove', handleDrag);
        window.addEventListener('mouseup', handleDragEnd);
    };

    const handleButtonClick = () => {
        setWidth(120);
        setShowButton(false);
    };

    return (
        <div style={{display: 'flex'}}>
            <div
                className="resizable-element"
                style={{
                    width: `${width}px`,
                    display: width <= 80 ? 'none' : 'block',
                }}
                onMouseDown={handleMouseDown}
            >      Resize Me
            </div>
            {
                showButton && (
                    <button className="resize-button" onClick={handleButtonClick}>
                        Reset Width
                    </button>
                )
            }
        </div>
    );
};

export default ResizableElement;
