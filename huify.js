export function huify(text){
    const newWords = []
    const words = text.split(' ')

    words.forEach(item => {
        if(item.match(/[0-9]/)) return

        const length = item.length

        if(length <= 2) {
            if(item[0].match(/[уеыаоэяиюУЕЫАОЭЯИЮ]/)) {
                newWords.push("хуй" + item)
            } else {
                newWords.push("хуе" + item)
            }
            return
        } else if(length > 2 && length <= 4) {
            if(item[1].match(/[уеыаоэяиюУЕЫАОЭЯИЮ]/)) {
                if(item[0].match(/[уеыаоэяиюйцкнгшщзхфвпрлджчсмтб]/)) {
                    newWords.push(item.replace(/^./, "хуй"))
                    return
                }
                if(item[0].match(/[УЕЫАОЭЯИЮЙЦКНГШЩЗХФВПРЛДЖЧСМТБ]/)) {
                    newWords.push(item.replace(/^./, "Хуй"))
                    return
                }
            }
            if(item[1].match(/[йцкнгшщзхфвпрлджчсмтбЙЦКНГШЩЗХФВПРЛДЖЧСМТБ]/)) {
                if(item[0].match(/[уеыаоэяиюйцкнгшщзхфвпрлджчсмтб]/)) {
                    newWords.push(item.replace(/^./, "хуе"))
                    return
                }
                if(item[0].match(/[УЕЫАОЭЯИЮЙЦКНГШЩЗХФВПРЛДЖЧСМТБ]/)) {
                    newWords.push(item.replace(/^./, "Хуе"))
                    return
                }
            }
        } else {
            if(item[2].match(/[уеыаоэяиюУЕЫАОЭЯИЮ]/)) {
                if(item[0].match(/[уеыаоэяиюйцкнгшщзхфвпрлджчсмтб]/)) {
                    newWords.push(item.replace(/^../, "хуй"))
                    return
                }
                if(item[0].match(/[УЕЫАОЭЯИЮЙЦКНГШЩЗХФВПРЛДЖЧСМТБ]/)) {
                    newWords.push(item.replace(/^../, "Хуй"))
                    return
                }
            }
            if(item[2].match(/[йцкнгшщзхфвпрлджчсмтбЙЦКНГШЩЗХФВПРЛДЖЧСМТБ]/)) {
                if(item[0].match(/[уеыаоэяиюйцкнгшщзхфвпрлджчсмтб]/)) {
                    newWords.push(item.replace(/^../, "хуе"))
                    return
                }
                if(item[0].match(/[УЕЫАОЭЯИЮЙЦКНГШЩЗХФВПРЛДЖЧСМТБ]/)) {
                    newWords.push(item.replace(/^../, "Хуе"))
                    return
                }
            }
        }

    })

    return newWords

}