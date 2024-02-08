import React, { useState } from 'react';
import Draggable from 'react-draggable';
import axios from 'axios'; 

const OverlayOptions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState('');
    const [media, setMedia] = useState('');

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
      
        const formData = {
            content: content,
            media: media
        };

        try {
            const response = await axios.post('http://localhost:5000/overlay', formData);
            console.log('Overlay saved:', response.data.overlay_id);
        } catch (error) {
            console.error('Error saving overlay:', error);
        }

    
        setIsOpen(false);
    };

    return (
        <div>
     
            <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Overlay
            </button>

       
            {isOpen && (
                <form onSubmit={handleFormSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
                        <input type="text" name="content" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Media (Image URL):</label>
                        <input type="text" name="media" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setMedia(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
                    </div>
                </form>
            )}

       
            {content && (
                <div className="overlay-item">
                    <Draggable
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        position={null}
                        grid={[5, 5]}
                        scale={1}
                        onStart={() => {}}
                        onDrag={() => {}}
                        onStop={() => {}}
                    >
                        <div style={{ position: 'absolute', zIndex: 2 }}>
                            <div className="handle" >
                                <p className="text-lg text-gray-800">{content}</p>
                            </div>
                        </div>
                    </Draggable>
                </div>
            )}
            {media && (
                <div className="overlay-item">
                    <Draggable
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        position={null}
                        grid={[5, 5]}
                        scale={1}
                        onStart={() => {}}
                        onDrag={() => {}}
                        onStop={() => {}}
                    >
                        <div style={{ position: 'absolute', zIndex: 1 }}>
                            <div className="handle" >
                                <img src={media} alt="Media" />
                            </div>
                        </div>
                    </Draggable>
                </div>
            )}
        </div>
    );
}

export default OverlayOptions;
