function solution(s) {
    let check_p = 0;
    let check_y = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") {
            check_p++;
        }
        if (s[i] === "y" || s[i] === "Y") {
            check_y++;
        }
    }
    return check_p === check_y ? true : false;
}
