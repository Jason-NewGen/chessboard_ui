import {useState, useMemo, useEffect, useCallBack} from 'react';
import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js';
import CustomDialog from './components/CustomDialog';

function Game({player}){
    const windowHeight = window.screen.availHeight
    const windowWidth = window.screen.availWidth;
    const chess = useMemo(() => new Chess(), []);
    const [fen, setFen] = useState(chess.fen());
    console.log(windowWidth / 2);
    return (
        <>
            <div className="flex w-full max-w-full">
                <Chessboard position={"8/6qP/p6N/K4p2/1Bpp3R/R4b2/1P1r2P1/5k2 w - - 0 1"} boardWidth={windowHeight - 123} />
                <div className="w-full border-2 border-black text-left text-green-700">Serial Monitor Output: </div>
            </div>
        </>
    )
}

export default Game;