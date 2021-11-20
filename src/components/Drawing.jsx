import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

const Drawing = () => {
  const [brushColor, setBrushColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(2);

  //   const updateCanvas = (canvasDraw) => (this.modify = canvasDraw);

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
          //   ref={updateCanvas}
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
        <button onClick={() => setBrushColor('#FF2626')}>RED</button>
        <button onClick={() => setBrushColor('#FFAE24')}>ORANGE</button>
        <button onClick={() => setBrushColor('#FFF824')}>YELLOW</button>
      </div>
      <button
        onClick={() => {
          this.modify.undo();
        }}
      >
        UNDO
      </button>
    </div>
  );
};

export default Drawing;
