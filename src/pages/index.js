import React, { useEffect, useState } from 'react';
import Box from './../components/Box';
import axios from 'axios';

/**
 * Main app component. Renders boxes.
 */
const Index = () => {
  const SIZE = 700; // height/width of board
  const NUM_COLS = 4; // number of cols/rows to divide by
  const SHUFFLE_BY = 25; // number of times to shuffle board
  const [boxesArr, setBoxesArr] = useState([]); // state - arrays of all the boxes
  const [emptyPos, setEmptyPos] = useState([3, 3]); // state - position of empty tile
  const [clickedBox, setClickedBox] = useState(); // state - last clicked box
  const [gameWon, setGameWon] = useState(false); // state - game won
  const [showNums, setShowNums] = useState(false); // state - toggle showing numbers on tiles
  const [imgSrc, setImgSrc] = useState(); // state - image src

  /**
   * getNewPos - Takes in a number 0-3 and returns a new valid position 0-3
   */
  const getNewPos = oldPos => {
    // if pos is 3 or 0 there's only 1 way to go.
    if (parseInt(oldPos) === 3) {
      return 2;
    } else if (parseInt(oldPos) === 0) {
      return 1;
    }
    // pos is 1-2. flip coin to add or sub 1
    if (Math.random() * 2 > 1) return parseInt(oldPos) + 1;
    return parseInt(oldPos) - 1;
  };

  /**
   * scramble - Takes the initial box array and shuffles it by
   * moving the empty box around to ensure that it can be won
   */
  const scramble = boxes => {
    let counter = 0;
    let emptyRow = emptyPos[0];
    let emptyCol = emptyPos[1];
    let newRow = emptyRow;
    let newCol = emptyCol;

    while (counter++ < SHUFFLE_BY) {
      // flip a coin to see if we're going to change row or col
      if (Math.random() * 2 > 1) {
        // change row
        newRow = getNewPos(emptyRow);
      } else {
        // change col
        newCol = getNewPos(emptyCol);
      }

      // swap empty col with new empty col
      [boxes[emptyRow][emptyCol], boxes[newRow][newCol]] = [
        boxes[newRow][newCol],
        boxes[emptyRow][emptyCol]
      ];

      // set where empty is
      emptyRow = newRow;
      emptyCol = newCol;
    }
    setEmptyPos([newRow, newCol]);
  };

  /**
   * isNextTo - Compares 2 boxes and returns true if they are next to each other
   */
  const isNextTo = (box1, box2) => {
    // grab row and col from box 1 and box 2
    const row1 = box1[0];
    const col1 = box1[1];
    const row2 = box2[0];
    const col2 = box2[1];

    // create arrays for positions that would be next to box
    const possibleRows = [];
    const possibleCols = [];

    // fill in the possible pos array depending on current pos
    if (row1 - 1 > -1) possibleRows.push(row1 - 1);
    if (row1 + 1 < 4) possibleRows.push(row1 + 1);
    if (col1 - 1 > -1) possibleCols.push(col1 - 1);
    if (col1 + 1 < 4) possibleCols.push(col1 + 1);

    // check to see if box 1 is next to box 2
    if (row1 === row2 && possibleCols.includes(col2)) return true;
    if (col1 === col2 && possibleRows.includes(row2)) return true;

    // boxes not next to each other
    return false;
  };

  /**
   * didWin - Checks order of boxes and returns true if you won
   */
  const didWin = () => {
    let ret = true;
    boxesArr.forEach((boxRow, row) => {
      boxRow.forEach((box, col) => {
        if (
          parseInt(box.key[0]) !== parseInt(row) ||
          parseInt(box.key[1]) !== parseInt(col)
        )
          ret = false;
      });
    });
    return ret;
  };

  /**
   * swapBoxes - Swaps the position of the 2 boxes
   */
  const swapBoxes = (box1, box2) => {
    const boxes = [...boxesArr];

    [boxes[box1[0]][box1[1]], boxes[box2[0]][box2[1]]] = [
      boxes[box2[0]][box2[1]],
      boxes[box1[0]][box1[1]]
    ];
    setBoxesArr(boxes);
    setEmptyPos([box1[0], box1[1]]);
  };

  /**
   * useEffect (ComponentDidMount) - get a random image from unsplash
   */
  useEffect(() => {
    (async () => {
      // fetch a random image URL from unsplash
      const result = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          client_id:
            '0bda86a0ab72412afc278690e4e71349ce98c99d967379b519408c88934559bf'
        }
      });
      // set the image url state variable
      setImgSrc(result.data.urls.regular);
    })();
  }, []);

  /**
   * useEffect (ComponentDidUpdate) - creates array of 15 box + 1 empty when image is received
   */
  useEffect(() => {
    if (imgSrc) {
      // container to hold arrays
      const boxes = [];

      // loop through to create each row array
      for (let row = 0; row < NUM_COLS; row += 1) {
        const boxRow = [];
        // loop through to fill boxes in the row
        for (let col = 0; col < NUM_COLS; col += 1) {
          if (row === NUM_COLS - 1 && col === NUM_COLS - 1) {
            // render empty div for last box
            boxRow.push(
              <div key={`${row}${col}`} id="empty-box">
                <img
                  src="https://i.imgur.com/CGdch5O.png"
                  alt="The Farm Project"
                  id="empty-img"
                />
              </div>
            );
          } else {
            // define props for a box so we can spread them.
            const boxProps = {
              row,
              col,
              setClickedBox,
              showNums,
              image: imgSrc,
              boxSize: SIZE / NUM_COLS,
              key: `${row}${col}`
            };
            boxRow.push(<Box {...boxProps} />);
          }
        }
        boxes.push(boxRow);
      }

      // scramble the boxes
      scramble(boxes);

      // set the boxes into the state
      setBoxesArr(boxes);
    }
  }, [imgSrc]);

  /**
   * useEffect (on clickedBox change)
   * 1. check if clicked box is next to empty
   * 2. swap box with empty
   * 3. then check win condition
   */
  useEffect(() => {
    if (clickedBox) {
      if (isNextTo(clickedBox, emptyPos)) {
        swapBoxes(clickedBox, emptyPos);
        if (didWin()) {
          setGameWon(true);
          setShowNums(false);
        }
      }
    }
  }, [clickedBox]);

  // Render component
  return (
    <div id="main">
      {/* Show game board if not yet won. Completed image if won */}
      {!gameWon ? (
        <div id="board">
          {boxesArr
            ? boxesArr.map((boxRow, row) =>
                boxRow.map((box, col) => {
                  const boxNum =
                    parseInt(box.key[0]) * 4 + parseInt(box.key[1]) + 1;
                  return (
                    <div
                      key={box.key}
                      id={`${row}${col}`}
                      onClick={e => {
                        setClickedBox([
                          parseInt(e.currentTarget.id[0]),
                          parseInt(e.currentTarget.id[1])
                        ]);
                      }}
                    >
                      {boxNum < 16 && showNums ? (
                        <div className="box-number">{boxNum}</div>
                      ) : (
                        ''
                      )}

                      {box}
                    </div>
                  );
                })
              )
            : ''}
        </div>
      ) : (
        <div id="completed-image">
          <h1 className="blinking">
            YOU <br />
            DID <br />
            IT!
          </h1>
          <img src={imgSrc} alt="Completed" />
        </div>
      )}
      {/* Hide show numbers button if game won */}
      {!gameWon ? (
        <div>
          <button id="show-num-btn" onClick={() => setShowNums(prev => !prev)}>
            {showNums ? 'No' : 'Show'} Numbers
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Index;
