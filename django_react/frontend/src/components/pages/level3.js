import { useState, useEffect } from "react";
import axios from "axios";
import "./hanoi.css";
import { TextField, Button } from "@mui/material";
import "./puzzlle.css";
import handleClick from "./call";

function Level3() {
  document.body.style.backgroundColor = "#d2e1f0";

  const [entry, setNewEntry] = useState(null)
  useEffect(() => {
    getEntry()
  }, [])

  function getEntry() {
    axios({
      method: "GET",
      url: "/api/user/",
    }).then((response) => {
      const data = response.data
      console.log(data)
      setNewEntry(data)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    })
  }

  const [moveCount, setMoveCount] = useState(0);
  const [dragId, setDragId] = useState();
  const [name, setName] = useState("");
  const [tiles, setTiles] = useState([
    {
      id: "Tile-1",
      column: 1,
      row: 1,
      width: 2
    },
    {
      id: "Tile-2",
      column: 1,
      row: 2,
      width: 4
    },
    {
      id: "Tile-3",
      column: 1,
      row: 3,
      width: 6
    },
    {
      id: "Tile-4",
      column: 1,
      row: 4,
      width: 8
    },
    // {
    //   id: "Tile-5",
    //   column: 1,
    //   row: 5,
    //   width: 10
    // },
    // {
    //   id: "Tile-6",
    //   column: 1,
    //   row: 6,
    //   width: 12
    // }
  ]);

  const handleDrag = (ev) => {
    const dragTile = tiles.find((tile) => tile.id === ev.currentTarget.id);
    const topTile = tiles
      .filter((tile) => tile.column === dragTile.column)
      .sort((a, b) => a.width - b.width)[0];

    if (topTile && ev.currentTarget.id === topTile.id) {
      setDragId(ev.currentTarget.id);
    } else {
      ev.preventDefault();
    }
  };

  const handleDrop = (ev) => {
    const dragTile = tiles.find((tile) => tile.id === dragId);
    const dropColumn = ev.currentTarget.id;

    const dropColumnTopTile = tiles
      .filter((tile) => tile.column.toString() === dropColumn.toString())
      .sort((a, b) => a.width - b.width)[0];

    let newTileState = tiles;

    if (!dropColumnTopTile || dragTile.width < dropColumnTopTile.width) {
      newTileState = tiles.map((tile) => {
        if (tile.id === dragTile.id) {
          tile.column = parseInt(dropColumn, 10);
          setMoveCount(moveCount + 1);
        }

        return tile;
      });
    }

    setTiles(newTileState);
  };

  const column1Tiles = tiles.filter((tile) => tile.column === 1);
  const column2Tiles = tiles.filter((tile) => tile.column === 2);
  const column3Tiles = tiles.filter((tile) => tile.column === 3);

  const winCondition = tiles.every((tile) => tile.column === 3);
  return (
    <>
      <div className="tf">
        <h3>LEVEL 3</h3>
      </div>
      <div className="App">
        <div className="instructions">
          <div>
            <span className="text-title">Objective:</span> Rebuild the tower in
            the third column in as little moves as possible
          </div>
          <div>
            <span className="text-title">Instructions:</span> Move one tile at a
            time, bigger tiles cannot go on top of smaller tiles
          </div>
        </div>
        <div className="content">
          <div
            className="column-container"
            id={1}
            onDragOver={(ev) => ev.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="center-bar" />
            {column1Tiles
              .sort((a, b) => a.width - b.width)
              .map((tile, index) => {
                const tileCount = column1Tiles.length;
                const tileStyles = {
                  width: `${tile.width}em`
                };
                tileStyles.marginTop =
                  index === 0 ? `calc(80vh - ${tileCount * 40 + 20}px)` : "0";
                return (
                  <div
                    {...tile}
                    className="tile"
                    draggable
                    key={`column-1-${tile.id}`}
                    onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    style={tileStyles}
                  />
                );
              })}
          </div>
          <div
            className="column-container"
            id={2}
            onDragOver={(ev) => ev.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="center-bar" />
            {column2Tiles
              .sort((a, b) => a.width - b.width)
              .map((tile, index) => {
                const tileCount = column2Tiles.length;
                const tileStyles = {
                  width: `${tile.width}em`
                };
                tileStyles.marginTop =
                  index === 0 ? `calc(80vh - ${tileCount * 40 + 20}px)` : "0";
                return (
                  <div
                    {...tile}
                    className="tile"
                    draggable
                    key={`column-2-${tile.id}`}
                    onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    style={tileStyles}
                  />
                );
              })}
          </div>
          <div
            className="column-container"
            id={3}
            onDragOver={(ev) => ev.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="center-bar" />
            {column3Tiles
              .sort((a, b) => a.width - b.width)
              .map((tile, index) => {
                const tileCount = column3Tiles.length;
                const tileStyles = {
                  width: `${tile.width}em`
                };
                tileStyles.marginTop =
                  index === 0 ? `calc(80vh - ${tileCount * 40 + 20}px)` : "0";
                return (
                  <div
                    {...tile}
                    className="tile"
                    draggable
                    key={`column-3-${tile.id}`}
                    onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    style={tileStyles}
                  />
                );
              })}
          </div>
        </div>
        {winCondition && (
          <div className="win-message">
            You Win!
            <div className="win-subtitle">
              You did it in <span className="win-number">{moveCount}</span>{" "}
              moves
            </div>
          </div>
        )}
        Move count: {moveCount}
      </div>
      <div className="bf">
        <TextField
          error={name.length === 0}
          value={name}
          onChange={(e) => {
            setName(e.target.value.toLowerCase());
          }}
        />
      </div>
      <div className="bf">
        <h3>Winning is not all if moves are more than lowest necessary, are you sure? {name} </h3>
      </div>
      <div className="bf">
        <Button variant="contained" onClick={() => handleClick(entry, name, entry.level)} disabled={(name === "") ? true : false}>SUBMIT</Button>
      </div>
    </>
  );
}

export default Level3