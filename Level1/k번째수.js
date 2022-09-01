function solution(array, commands) {
    return commands.map((cmd) => {
        const newCmd = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b);
        return newCmd[cmd[2] - 1];
    });
}
