function wordsTracker(arr) {
    let wordstoTrack = arr.shift().split(" ");
    let tracker = {};
    let unsortArr = []
    for (let index of wordstoTrack) {
        tracker[index] = 0;
    }
    for (let index of arr) {
        if(tracker.hasOwnProperty(index)) {
            tracker[index] += 1
        }
    }
    for (let key of Object.entries(tracker)) {
        unsortArr.push(key)
    }
    let sort = unsortArr.sort((a, b) => b[1] - a[1])
    for (let index of sort) {
        console.log(index[0], "-", index[1])
    }
}
wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])