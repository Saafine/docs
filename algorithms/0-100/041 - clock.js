{
    function solve(arr: string[], result: string = '', combinations: string[] = []): string[] {
        if (result.length === 2 && Number(result) > 23 ) return combinations;
        if (result.length === 4 && Number(result.slice(2)) > 59 ) return combinations;
        if (!arr.length) return [...combinations, result];

        let results = [];
        let ignore = {};
        for (let x = 0; x < arr.length; x++) {
            if (ignore[arr[x]]) continue;
            const rest = [...arr.slice(0, x), ...arr.slice(x + 1)];
            results.push(...solve(rest, result + arr[x], combinations));
            ignore[arr[x]] = true;
        }

        return results;
    }

    const input = ['1', '2', '3', '4'];
    const test = solve(input);
    test;
}
