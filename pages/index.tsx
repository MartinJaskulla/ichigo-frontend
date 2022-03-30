import type { NextPage } from 'next'
import { useState } from 'react';

const COLORS: string[] = ['#0489df', '#e53558', '#8c7b5b', '#b85e61', '#7f01ca', '#00b19f', '#007a67', '#6a53fe', '#475c6c'];

interface GridButton {
    gridArea: string
    text: string
}

const Home: NextPage = () => {
    const [colorOffset, setColorOffset] = useState(0);

    const randomizeColors = () => {
        let newColorOffset = colorOffset;
        while (newColorOffset === colorOffset) {
            newColorOffset = Math.floor(Math.random() * COLORS.length);
        }
        setColorOffset(newColorOffset);
    };

    const gridButtons: GridButton[] = [
        {text: "1", gridArea: "one",},
        {text: "2", gridArea: "two",},
        {text: "3", gridArea: "three",},
        {text: "4", gridArea: "four",},
        {text: "5", gridArea: "five",},
        {text: "6", gridArea: "six",},
        {text: "7", gridArea: "seven",},
        {text: "8", gridArea: "eight",},
        {text: "9", gridArea: "nine",},
    ];

    // When using keyboard navigation on screens < 600px, the tab order seems unintuitive, but is actually correct:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility#:~:text=Authors%20must%20use%20order%20and%20the%20grid%2Dplacement%20properties%20only%20for%20visual%2C%20not%20logical%2C%20reordering%20of%20content.%20Style%20sheets%20that%20use%20these%20features%20to%20perform%20logical%20reordering%20are%20non%2Dconforming.
    return (
        <div id="grid">
            {gridButtons.map((gridButton, index) => (
                <button
                    key={gridButton.gridArea}
                    onClick={randomizeColors}
                    style={{
                        gridArea: gridButton.gridArea,
                        background: COLORS[(index + colorOffset) % COLORS.length]
                    }}
                >
                    {gridButton.text}
                </button>)
            )}
        </div>
    );
}

export default Home
