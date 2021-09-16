function hashMe(password: number): number {
    const hash = 10 + (password % 2);
    console.log(password, ":", hash);
    return hash;
}

hashMe(800)

// echo -n "4,June 4 15:"