import React, { useState } from 'react';

const ResizableElement = () => {
    const [width, setWidth] = useState(200);
    const [showButton, setShowButton] = useState(false);

    const handleDrag = e => {
        const newWidth = e.clientX;
        if (newWidth <= 80) {
            setWidth(80);
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
        <div>
            <div className="flex">
                <div
                    style={{
                        width: `${width}px`,
                    }}
                    className={' bg-sky-600 h-24'}
                >
                    <p>Resize Me</p>
                    <button> ← </button>
                </div>
                <div id='resizeBar' className='bg-slate-500 w-2 cursor-col-resize' onMouseDown={handleMouseDown}></div>
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
