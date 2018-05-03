class Palindrome {

    async check(ctx) {

        const word = ctx.request.body.word

        if (!word)
            ctx.throw(400, 'You need to insert a word!')


        const regex = /[\W_]/g
        const lowRegWord = word.toLowerCase().replace(regex, '')
        const reverseWord = lowRegWord.split('').reverse().join('')
        const result = reverseWord === lowRegWord

        if (result) {
            ctx.body = {
                res: `The word ${word} is a palindrome!`
            }
        }

        if (!result) {
            ctx.throw(400, `The word ${word} is not a palindrome!`)
        }

    }

}

module.exports = new Palindrome()