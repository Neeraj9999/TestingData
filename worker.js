onmessage = () => {
    let count = 0;
    for(let i=0;i<99999999999;i++){
        count=i
    }
    postMessage(count)
}
