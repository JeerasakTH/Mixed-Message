const slot = {
    coin: 0,
    _spin:['Sherry', 'Bell', 'Coin', '7'],
    _result: [],

    randomSlot(random){
       return random === 0 ? this._result.push(this._spin[0]): 
       random === 1 ? this._result.push(this._spin[1]):
       random === 2 ? this._result.push(this._spin[2]):
       this._result.push(this._spin[3])
    },

    get check(){
        const chat = '';
        if (this._result[0] === this._result[1] || this._result[0] === this._result[2] || this._result[1] === this._result[2]) {
            this.chat = 'You win';
            this.coin += 2;
        } else if (this._result[0] === this._result[1] === this._result[2]) {
            this.chat = 'Jackpot Big prize!';
            this.coin += this.coin;
        } else {
            this.chat = 'You\'ve lose all of your coin';
            this.coin -= this.coin;
        }
        // console.log(this.coin)
        console.log(`${this._result.join(' ')}\n${this.chat} and you have ${this.coin} left`)
    }

}


for (let i=3; i>0; i--){
    random = Math.floor(Math.random() * 4)
    slot.randomSlot(random)
}

slot.check


