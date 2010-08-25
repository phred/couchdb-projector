function (data) {
    var remotes = [];

    for (row in data.rows) {
        remotes.push(data.rows[row].value);
    }
    return {remotes: remotes};
}