import React, { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {

    const [text, setText] = useState("");
    // const finalText = "Hello World!";
    const finalText = "Loading!";

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setText(finalText.substring(0, index));
            index++;

            if (index > finalText.length) {
                clearInterval(interval);
                setTimeout(onComplete, 1000);
                // onComplete();
            }
        }, 200);

        return () => clearInterval(interval);
        // }, [onComplete]);
    }, [onComplete]);

    return (
        <div className='flex flex-col items-center justify-center inset-0 fixed bg-black z-50 text-gray-100'>
            <div className='mb-4 md:text-5xl text-4xl font-mono font-bold'>{text}<span className='animate-blinking'>|</span></div>
            <div className="md:w-[400px] w-[300px] h-[3px] rounded bg-gray-800 relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 animate-loading shadow-[0_0_15px_#3b82f6]"></div>
            </div>
        </div>
    )
}

export default LoadingScreen
