import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

const Drawing = () => {
  const [brushColor, setBrushColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(2);

  return (
    <div>
      <div
        style={{
          width: '500px',
          height: '500px',
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '2rem',
        }}
      >
        <CanvasDraw
          //   ref={(canvasDraw) => (this.modify = canvasDraw)}
          lazyRadius={1}
          brushColor={brushColor}
          brushRadius={brushSize}
          hideInterface={true}
          hideGrid={true}
          style={{
            width: '400px',
            height: '400px',
            border: '1px solid black',
            alignSelf: 'center',
          }}
        />
      </div>
      <label>Brush Size</label>
      <button
        onClick={() => {
          setBrushSize(2);
        }}
      >
        Small
      </button>
      <button
        onClick={() => {
          setBrushSize(10);
        }}
      >
        Med
      </button>
      <button
        onClick={() => {
          setBrushSize(15);
        }}
      >
        large
      </button>
      <div>
        <label>Custom Color:</label>
        <input
          style={{ background: { brushColor } }}
          type="color"
          value={brushColor}
          onChange={(e) => {
            console.log(e.target.value);
            setBrushColor(e.target.value);
          }}
        />
        <button onClick={() => setBrushColor('#892301')}>Kobe</button>
        <button onClick={() => setBrushColor('#C8752D')}>Ochre</button>
        <button onClick={() => setBrushColor('#FEDA86')}>Jasmine</button>
        <button onClick={() => setBrushColor('#86AC9B')}>Morning Blue</button>
        <button onClick={() => setBrushColor('#26543F')}>
          Brunswick Green
        </button>
        <button onClick={() => setBrushColor('#111615')}>Eerie Black</button>
      </div>
      <button>UNDO</button>
      Und
    </div>
  );
};

export default Drawing;
