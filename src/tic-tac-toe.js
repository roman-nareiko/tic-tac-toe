class TicTacToe {
    constructor() {
        this._currentPlayerSymbol = 'x';
        this._maxtrix = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this._turns = 0;
        this._winner = null;
    }

    getCurrentPlayerSymbol() {
        return this._currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this._maxtrix[rowIndex][columnIndex]){
            this._maxtrix[rowIndex][columnIndex] = this._currentPlayerSymbol;
            this._currentPlayerSymbol = this._currentPlayerSymbol === 'x' ? 'o' : 'x';
            this._turns++;
            
            for(let i = 0; i < 3; i++){
                if(this._maxtrix[i][0] && this._maxtrix[i][0] === this._maxtrix[i][1] &&  this._maxtrix[i][1] === this._maxtrix[i][2]){
                    this._winner = this._maxtrix[i][0];

                    return;
                }
            }

            for(let i = 0; i < 3; i++){
                if(this._maxtrix[0][i] && this._maxtrix[0][i] === this._maxtrix[1][i] && this._maxtrix[1][i] === this._maxtrix[2][i]){
                    this._winner = this._maxtrix[0][i];

                    return;
                }
            }

            if(this._maxtrix[0][0] && this._maxtrix[0][0] === this._maxtrix[1][1] && this._maxtrix[1][1] === this._maxtrix[2][2]){
                this._winner = this._maxtrix[1][1];
                
                return;
            }

            if(this._maxtrix[0][2] && this._maxtrix[0][2] === this._maxtrix[1][1] && this._maxtrix[1][1] === this._maxtrix[2][0]){
                this._winner = this._maxtrix[1][1];
            }
        }
    }

    isFinished() {
        if(this.getWinner() || this.noMoreTurns())
            return true;
        
        return false;
    }

    getWinner() {
        return this._winner;
    }

    noMoreTurns() {
        return this._turns === 9;
    }

    isDraw() {
        if(!this.isFinished() || this.getWinner())
            return false;
        else
            return true;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this._maxtrix[rowIndex][colIndex])
            return this._maxtrix[rowIndex][colIndex];

        return null;
    }
}

module.exports = TicTacToe;
